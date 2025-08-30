const SYMBOLS = "!,@,#,$,%,^,&,*,(,),_,>,<,{,},[,]";

async function sha3_384(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-384", msgBuffer);
  return new Uint8Array(hashBuffer);
}

function toBase64(bytes) {
  let binary = "";
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function fromBase64(str) {
  const binary = atob(str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function deterministicPasswordOnce(text, length = 16) {
  const hashed = await sha3_384(text);
  const encoded = toBase64(hashed);

  const decoded = fromBase64(encoded);
  const final_b64 = toBase64(decoded);

  let password = final_b64.slice(0, length - 2);

  const s1 = SYMBOLS[hashed[0] % SYMBOLS.length];
  const s2 = SYMBOLS[hashed[1] % SYMBOLS.length];

  return password + s1 + s2;
}

async function deterministicPassword(text, length = 16, rounds = 1) {
  let result = text;
  for (let i = 0; i < rounds; i++) {
    result = await deterministicPasswordOnce(result, length);
  }
  return result;
}

// Password strength checker (both input and generated)
function checkStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2) return "Weak";
  else if (score === 3) return "Medium";
  else return "Strong";
}

async function generatePassword() {
  const input = document.getElementById("passwordInput").value;
  const rounds = parseInt(document.getElementById("roundsInput").value) || 1;

  if (!input) {
    alert("Please enter some text!");
    return;
  }

  // Check input strength
  const inputStrength = checkStrength(input);

  // Generate deterministic password
  const result = await deterministicPassword(input, 16, rounds);
  const resultStrength = checkStrength(result);

  // Show generated password
  const outputDiv = document.getElementById("result");
  outputDiv.textContent = "Generated Password: " + result;
  outputDiv.classList.add("show");

  // Show both strengths
  const strengthDiv = document.getElementById("strength");
  strengthDiv.innerHTML = `
    Input Strength: ${inputStrength}<br>`;
  strengthDiv.classList.add("show");
}
