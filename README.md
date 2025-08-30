# 🔐 Deterministic Password Generator

A **secure, animated web app** for generating **deterministic strong passwords** using SHA3-384 hashing, Base64 encoding/decoding, and custom symbol injection.  
It also checks and displays **password strength** (for both input & generated values).  

---

## 🌟 Features
- Deterministic password generation (same input → same password).  
- Configurable **rounds (repetitions)** for multiple encodings.  
- Password strength checker (Weak / Medium / Strong).  
- Modern UI with CSS animations.  
- Footer credit: *Made By Srijan Manna, Dept. of Computer Science, RKMVM*  

---

## 📂 Project Structure
password-generator/
│── index.html # Main UI
│── style.css # Styling & animations
│── script.js # Frontend logic (hashing + animations)
---

## ⚡ How It Works
1. User enters input text + number of repetitions.  
2. The app:
   - Hashes the input with **SHA3-384**  
   - Encodes → Decodes → Re-encodes in **Base64**  
   - Injects deterministic symbols  
   - Repeats for given rounds  
3. Displays:
   - Final **deterministic password**  
   - **Strength of input password**  
   - **Strength of generated password**  

---
