# Module 1: Phishing Awareness

## 1. Learning Objectives
By the end of this module, you will be able to:
*   Define phishing and explain its primary goal.
*   Identify the key psychological triggers used in phishing attacks.
*   Recognize technical and contextual "red flags" in email communication.
*   Safely inspect links and sender information without clicking.
*   Report suspicious emails using the organization's standard reporting process.

---

## 2. Content Body

### What is Phishing?
Phishing is a cyber attack that uses disguised email as a weapon. The goal is to trick the email recipient into believing that the message is something they want or need—an request from their bank, for instance, or a note from someone in their company—and to click a link, download an attachment, or provide sensitive information.

Phishing is the single most common entry point for cyber criminals. Rather than hacking through complex technical firewalls, attackers find it much easier to exploit human psychology.

```
[Attacker] --(Disguised Email)--> [Employee] --(Clicks/Logins)--> [Data/System Compromise]
```

### Psychological Triggers (Why Phishing Works)
Attackers design phishing emails to bypass your critical thinking by triggering strong emotions:
*   **Urgency:** "Your account will be suspended in 24 hours." (Panic makes us act before we think).
*   **Authority:** "This is the CEO. I need you to buy gift cards immediately." (We are conditioned to follow instructions from superiors).
*   **Fear of Loss:** "Unauthorized login detected. Verify your identity to prevent account deletion."
*   **Curiosity/Greed:** "Congratulations! You won the monthly employee raffle. Claim your prize here."

---

### How to Spot a Phishing Email
You don't need to be a technical expert to spot phishing. Look for the following elements:

#### A. The Sender Address (Spoofing)
Attackers often mimic trusted names, but they cannot use the exact legitimate domain.
*   *Display Name vs. Actual Email:* The email might say it is from "Microsoft Support", but if you look at the actual address, it might be `support@microsoft-update-security-portal.com` or `xyz123@gmail.com`.
*   *Look-alike Domains (Typosquatting):* Look closely for subtle typos, such as `paypa1.com` instead of `paypal.com` or `sec-ur1ty.com` instead of `security.com`.

#### B. The Hyperlinks
Before clicking any link in an email, **hover your mouse cursor over it**. A small popup will show you the destination URL.
*   Does the displayed link match the actual URL? (e.g., if the text says `www.yourbank.com` but hovering shows `http://badsite.ru/login`, it is a scam).
*   Is it an HTTP address instead of HTTPS? (Legitimate login screens almost always use HTTPS).

#### C. Generic Greetings
Phrases like "Dear Customer," "Dear Valued Employee," or "Hello Admin" instead of your actual name are signs of bulk automated phishing.

#### D. The Call to Action
Does the email ask you to perform an action that violates company policy? Examples include:
*   Resetting your password via a link sent out of the blue.
*   Downloading a ".zip", ".exe", or macro-enabled Excel file.
*   Providing credit card details or employee login credentials.

---

### Real-World Phishing Examples

#### Scenario 1: The Shared Document Notification
*   **The Hook:** You receive an email stating: *"HR Department shared a folder 'Q3 Salaries and Bonuses.docx' with you via OneDrive."*
*   **The Trap:** There is a button that says "View Document". Clicking it takes you to a fake Microsoft login page.
*   **The Threat:** If you enter your password, the attacker steals your credentials and accesses your corporate account.
*   **Crucial Clue:** The email sender domain is a generic Gmail or compromised external company address, not your company's domain.

#### Scenario 2: The Urgent Invoice Alert
*   **The Hook:** An email from a known supplier stating: *"Overdue payment for Invoice #98721. Please review the attached PDF immediately to avoid late fees."*
*   **The Trap:** The attachment is a PDF or Word document that prompts you to "Enable Content/Macros" or contains a hidden script.
*   **The Threat:** Opening the document installs malware or ransomware on your computer, which can spread to the entire corporate network.
*   **Crucial Clue:** You do not recognize the invoice number, the sender's tone is uncharacteristically aggressive, or you do not normally handle billing for that supplier.

---

## 3. Red Flags Checklist
Before replying, clicking, or downloading, ask yourself these five questions:
- [ ] **Who sent this?** Is the actual email address (not just the display name) from a trusted, official company domain?
- [ ] **Are they creating panic?** Does the email demand immediate action or use high-pressure language?
- [ ] **Where does the link go?** If I hover my mouse over the link, does the address look safe, recognizable, and spell-checked?
- [ ] **Is there an attachment?** Am I expecting this file? Is it an executable format (like `.zip`, `.exe`, `.scr`) disguised as a document?
- [ ] **Does this make sense?** Would the CEO really ask me to buy gift cards? Would IT really ask for my password via email?

---

## 4. Key Takeaways
1.  **IT and Security will NEVER ask for your password.** Anyone asking for your password via email, message, or phone is an attacker.
2.  **Think before you click.** Pause and hover over links. If something feels off, verify it through an independent channel.
3.  **Verify via phone or chat.** If a colleague or boss makes an unusual request, call them on their verified number or message them on corporate chat to confirm.
4.  **Reporting is your superpower.** Reporting a phishing email protects not only your account but also the entire organization.

---

## 5. 5-Question Quiz

### Question 1
An email appears to come from your company’s CEO, sent from a personal Gmail address (`ceo.name.company@gmail.com`). The email asks you to immediately wire funds to a new vendor because they are in a meeting and cannot access their portal. What should you do?
*   A) Wire the funds immediately to avoid keeping the CEO waiting.
*   B) Reply to the email asking for confirmation of the bank details.
*   C) Ignore the request and do nothing.
*   D) Do not transfer any funds. Contact the CEO via their official company chat or phone number to verify the request.

### Question 2
You receive an email from "Microsoft Security Team" warning that your account will be locked in 1 hour if you do not click a link to verify your password. What is the primary psychological trigger being used here?
*   A) Authority
*   B) Urgency
*   C) Greed
*   D) Curiosity

### Question 3
How can you safely check where a hyperlink in an email actually leads before clicking it?
*   A) Click the link, and if it looks bad, close the browser tab immediately.
*   B) Copy the link and paste it into a search engine.
*   C) Hover your mouse pointer over the link without clicking to view the destination URL.
*   D) Click the link using a private browsing window.

### Question 4
Which of the following email attachments is generally considered the HIGHEST security risk if received from an unexpected source?
*   A) `invoice.pdf`
*   B) `schedule.xlsx`
*   C) `update_patch.exe`
*   D) `presentation.pptx`

### Question 5
You accidentally clicked a link in a suspicious email and entered your login credentials on the page that loaded. What should be your immediate first step?
*   A) Wait until the end of the day to see if anything happens to your account.
*   B) Change your password immediately and contact the IT/Security Helpdesk.
*   C) Delete the email from your inbox and trash folder so nobody else sees it.
*   D) Reply to the sender and ask them to delete your login details.

---

## Answer Key & Explanations

1.  **Correct Answer: D**
    *   *Explanation:* CEO impersonation (business email compromise) is a highly common attack. Always verify urgent, out-of-channel financial or data requests using a known, trusted communication method (like calling them or speaking in person).
2.  **Correct Answer: B**
    *   *Explanation:* The threat of account lockout within a tight timeframe (1 hour) is designed to create panic and bypass rational decision-making (Urgency).
3.  **Correct Answer: C**
    *   *Explanation:* Hovering over a link displays the target URL in the status bar or a tooltip, allowing you to check if the domain is legitimate without executing any web requests.
4.  **Correct Answer: C**
    *   *Explanation:* Files ending in `.exe` (executables) are programs that run code on your system. Unexpected executables are almost certainly malware.
5.  **Correct Answer: B**
    *   *Explanation:* If you suspect your credentials have been compromised, acting quickly by changing your password and notifying security minimizes the window of opportunity for the attacker.
