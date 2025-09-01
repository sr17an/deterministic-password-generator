# 🔐 Deterministic Password Generator

A **secure, animated web app** for generating **deterministic strong passwords** using SHA3-384 hashing, Base64 encoding/decoding, and custom symbol injection.  
It also checks and displays **password strength** (for both input & generated values).  

---
## 🌍 Live Website
👉 [Click here to open the app](https://sr17an.github.io/deterministic-password-generator/)

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

## 🚀 Purpose  

Most people:  
- 🔁 Reuse passwords across websites.  
- 📅 Choose predictable formats (`username@123`, `birthday@year`).  
- 🕵️ Get hacked via **dictionary attacks**, **brute force**, or **psychological guesswork**.  

This project solves that problem:  
- ✍️ You enter a **simple password** you can easily remember.  
- 🔒 The tool converts it into a **deterministic strong password** using hashing.  
- 🔁 You can repeat the **hashing process multiple times** for extra security.  
- 🧠 You only need to remember:  
  1. Your original simple password  
  2. How many iterations of hashing you used  

👉 For login, just generate your strong password again from your simple password + iteration count, copy it, and paste it into the website or app.  

---

## 🔑 Features

✅ Converts weak passwords into cryptographically strong ones.

✅ Supports multiple hashing iterations.

✅ Deterministic → same input + same iterations → always the same output.

✅ No need to store passwords in files or managers.

✅ Works offline (safe from online trackers).

---
## 📸 Demo Diagram  

![Password Flow](/Flowchart/FlowChart.png)  
*(Simple Password → Password Strength Check → Hashing → Strong Password)*  


## 👨‍💻 Author
Srijan Manna
Dept. of Computer Science, RKMVM

