import string
import hashlib, base64

# For password strength
def check_strength(password):
    score = 0
    
    if len(password) >= 8:
        score += 1
    if any(c.islower() for c in password):
        score += 1
    if any(c.isupper() for c in password):
        score += 1
    if any(c.isdigit() for c in password):
        score += 1
    if any(c in string.punctuation for c in password):
        score += 1

    if score <= 2:
        return "Weak"
    elif score == 3:
        return "Medium"
    else:
        return "Strong"


SYMBOLS = "!,@,#,$,%,^,&,*,(,),_,>,<,{,},[,]"

def deterministic_password_once(text, length=16):
    """Do one round of deterministic password generation"""
    hashed = hashlib.sha3_384(text.encode()).digest()
    encoded = base64.b64encode(hashed).decode()

    # decode + re-encode step
    decoded_bytes = base64.b64decode(encoded)
    final_b64 = base64.b64encode(decoded_bytes).decode()

    password = final_b64[:length-2]

    # deterministic symbols
    s1 = SYMBOLS[hashed[0] % len(SYMBOLS)]
    s2 = SYMBOLS[hashed[1] % len(SYMBOLS)]

    return password + s1 + s2


def deterministic_password(text, length=16, rounds=1):
    """Repeat deterministic password process multiple times"""
    result = text
    for _ in range(rounds):
        result = deterministic_password_once(result, length)
    return result


if __name__ == "__main__":
    pwd = input("Enter a password: ")
    rounds = int(input("How many rounds? (e.g., 1, 2, 3): "))
    print("Strength:", check_strength(pwd))
    print("Final Deterministic Strong Password:", deterministic_password(pwd, 16, rounds))
