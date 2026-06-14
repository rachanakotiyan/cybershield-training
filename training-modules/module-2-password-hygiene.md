# Module 2: Password Hygiene

## 1. Learning Objectives
By the end of this module, you will be able to:
*   Create strong, memorable passwords using the "passphrase" method.
*   Explain why password reuse across accounts represents a major security risk.
*   Understand and set up Multi-Factor Authentication (MFA) on corporate and personal accounts.
*   Describe the security benefits of using a password manager.
*   Safely generate, store, and manage login credentials.

---

## 2. Content Body

### The Problem with Traditional Passwords
Historically, we were told to create passwords like `P@$$w0rd!12`. While complex, these passwords are short, difficult to remember, and easily cracked by modern computers. They also lead to bad habits, like writing them down on sticky notes or reusing them across multiple accounts.

If an attacker breaches a weak website where you reused your password, they will immediately try that same password on your corporate email, bank, and social media accounts. This is called **Credential Stuffing**.

---

### Strong Password Guidelines: The Passphrase Method
Modern security standards favor **length over complexity**. The easiest way to create a strong password is to use a **passphrase**—a sequence of random, unrelated words.

#### Why Length Rules
*   A password like `Tr0ub4dor&3` (11 characters, complex) takes a few days to crack.
*   A passphrase like `correct-horse-battery-staple` (28 characters, simple words) would take billions of years to crack.

```
Weak:    Pa$$w0rd (8 chars) - Cracked instantly
Better:  Spring2026! (11 chars) - Cracked in hours
Strong:  purple-apple-tractor-window (28 chars) - Virtually uncrackable
```

#### Rules for a Strong Passphrase:
1.  **Minimum 14-16 characters:** The longer, the better.
2.  **Combine 4+ random words:** Do not use common idioms, song lyrics, or quotes (e.g., `to-be-or-not-to-be` is weak because it is a known phrase).
3.  **Separate with characters:** Use dashes, spaces, or symbols to connect the words (e.g., `coffee-desk-cloud-guitar`).
4.  **Avoid personal details:** Do not include your name, birth year, pet's name, or company name.

---

### Multi-Factor Authentication (MFA)
Multi-Factor Authentication (MFA) is an electronic verification method where a user is granted access to a website or application only after presenting two or more pieces of evidence (factors).

If an attacker steals your password, **MFA is your second line of defense.** It stops them from logging in because they do not have your second factor.

#### The Three Types of Factors:
1.  **Something You Know:** Your password or PIN.
2.  **Something You Have:** Your smartphone, hardware token, or security key.
3.  **Something You Are:** Your fingerprint, facial scan, or iris.

#### MFA Methods (Ranked from Most to Least Secure):
1.  **FIDO2 Hardware Keys (e.g., YubiKey):** Small USB devices you plug into your computer. Most secure, immune to phishing.
2.  **Authenticator Apps (e.g., Google/Microsoft Authenticator):** Generates a temporary 6-digit code on your phone every 30 seconds, or sends a push notification. Highly secure.
3.  **SMS/Text Message Codes:** A code texted to your phone. *Least secure* because hackers can hijack phone numbers (SIM swapping) or intercept SMS messages. Use it only if no other MFA option is available.

---

### Password Managers
A password manager is a secure digital vault that stores all your login credentials. Instead of memorizing dozens of passwords, you only need to remember **one** strong Master Password.

#### Why You Should Use a Password Manager:
*   **Generates Strong Passwords:** It creates long, random, and unique passwords for every account automatically.
*   **Autofills Credentials:** It fills in logins for you, which also prevents phishing! (If you are on a fake website, the password manager won't autofill your password because the URL doesn't match).
*   **Stores Secure Notes:** Safely stores PINs, answers to security questions, and software licenses.

#### Keeping Your Vault Safe:
*   **The Master Password is Key:** Make your Master Password a long, unique passphrase (e.g., `guitar-running-coffee-ocean`). Never share it with anyone.
*   **Turn on MFA:** Enable MFA on your password manager vault immediately.
*   **Set a Timeout Lock:** Ensure your password manager locks automatically after a few minutes of inactivity.

---

## 3. Key Takeaways
1.  **Length is king:** Use long passphrases (4+ random words) instead of short, complex codes.
2.  **Never reuse passwords:** Every single account must have a unique password.
3.  **MFA is non-negotiable:** Enable Multi-Factor Authentication on all accounts, especially email, banking, and password vaults.
4.  **Let the machine do the work:** Use an approved password manager to generate, store, and autofill your credentials.

---

## 4. 5-Question Quiz

### Question 1
Which of the following passwords/passphrases would take a computer the LONGEST time to crack?
*   A) `P@ssw0rd123!`
*   B) `blue-sunset-dog-keyboard`
*   C) `Summer2026`
*   D) `AdminAccount!`

### Question 2
Why is reusing the same password across multiple websites a dangerous practice?
*   A) It slows down your computer's internet connection.
*   B) If one website is compromised, attackers can use that password to access your other accounts.
*   C) Password managers will crash if they detect duplicate passwords.
*   D) Web browsers will automatically block your account.

### Question 3
You receive a text message containing an MFA verification code that you did not request. What does this likely mean, and what should you do?
*   A) Someone has your password and is trying to log in. You should ignore the text and change your password immediately.
*   B) The system has a glitch. You should forward the code to IT support.
*   C) Someone entered their username wrong. You should reply to the text saying "wrong number".
*   D) Your account is safe, and no action is required.

### Question 4
Which MFA method is generally considered the LEAST secure due to risks like SIM-swapping or interception?
*   A) Google Authenticator app push notification
*   B) Hardware security key (e.g., YubiKey)
*   C) SMS (Text message) verification codes
*   D) Biometric facial recognition

### Question 5
How does using a password manager help protect you against phishing websites?
*   A) It blocks the phishing email from arriving in your inbox.
*   B) It automatically reports the phishing site to the police.
*   C) It will not autofill your credentials on a fake website because the URL does not match the stored entry.
*   D) It encrypts the entire internet connection.

---

## Answer Key & Explanations

1.  **Correct Answer: B**
    *   *Explanation:* `blue-sunset-dog-keyboard` is a passphrase with 24 characters. The exponential difficulty of guessing a longer sequence makes length the most critical factor in password strength.
2.  **Correct Answer: B**
    *   *Explanation:* Attackers run automated scripts to test leaked credentials from past breaches on other major platforms (credential stuffing). Unique passwords contain the damage to a single account.
3.  **Correct Answer: A**
    *   *Explanation:* An unsolicited MFA code indicates that someone successfully entered your correct username and password, but was stopped by the MFA block. You must immediately change your password.
4.  **Correct Answer: C**
    *   *Explanation:* SMS relies on cellular networks, which are vulnerable to interception and "SIM swap" scams (where attackers trick the telecom provider into moving your number to their device).
5.  **Correct Answer: C**
    *   *Explanation:* Password managers are tied to specific domain names. If you visit a spoofed domain (e.g., `mybank-login-secure.com` instead of `mybank.com`), the password manager will recognize it is a different site and refuse to autofill.
