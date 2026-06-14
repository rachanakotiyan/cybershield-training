# Module 3: Social Engineering

## 1. Learning Objectives
By the end of this module, you will be able to:
*   Define social engineering and identify its key phases.
*   Distinguish between different types of social engineering (pretexting, baiting, vishing, and tailgating).
*   Recognize the tactics used by attackers to gain physical access to facilities.
*   Apply verification protocols to screen unexpected requests for sensitive data or access.
*   Politely refuse unauthorized requests and report incidents.

---

## 2. Content Body

### What is Social Engineering?
Social engineering is the art of manipulating people so they give up confidential information or perform actions they wouldn't normally do. Unlike technical hacking, which targets computer code, social engineering targets **human nature**.

#### The Social Engineering Lifecycle:
1.  **Investigation:** Gathering info on the target (social media, public directories).
2.  **Hook:** Establishing contact and building a relationship/trust.
3.  **Play:** Exploiting the trust to obtain information or access.
4.  **Exit:** Ending the contact without raising suspicion.

```
[Gather Info] ---> [Build Trust (Pretext)] ---> [Exploit/Steal] ---> [Disappear]
```

---

### Common Types of Social Engineering

#### A. Pretexting (Creating a Fake Story)
In pretexting, the attacker invents a scenario (the "pretext") to convince the victim to release information or perform an action.
*   *The Persona:* The attacker might pretend to be an external auditor, an IT technician, an HR representative, or a police officer.
*   *The Trap:* They call or email saying they are conducting a routine system audit and need you to verify your department's shared passwords, employee IDs, or financial structures.

#### B. Baiting (The Enticing Trap)
Baiting relies on curiosity or greed. The attacker offers something appealing to trick the victim.
*   *Physical Baiting (The USB Drop):* The attacker leaves a flash drive in a public area (e.g., parking lot, elevator, breakroom) labeled "Q3 Layoffs" or "Salary Review". Curiously, an employee plugs it into a work computer, which instantly infects the machine with malware.
*   *Digital Baiting:* Offering a free software download, system speed-up tool, or digital gift card in exchange for corporate login details.

#### C. Vishing (Voice Phishing)
Vishing is phishing conducted over the phone. Attackers use phone spoofing technology to make caller ID display a trusted name (e.g., "Corporate Helpdesk" or "IRS").
*   *The Tactic:* The caller sounds highly professional, helpful, or authoritative.
*   *Example:* *"Hi, this is Mark from corporate IT. We've detected an active database leak on your workstation. I need you to read me the code that just popped up on your phone screen so I can block it."* (The code is actually an MFA prompt the attacker triggered).

#### D. Tailgating / Piggybacking (Physical Social Engineering)
Tailgating occurs when an unauthorized person follows an authorized employee into a secured corporate building.
*   *The Tactic:* The attacker walks behind an employee entering a badge-secured door, often holding a box of donuts, carrying heavy boxes, or pretending to be on their phone.
*   *The Danger:* Once inside, the attacker can steal physical files, plant keyloggers on unlocked computers, or steal company property.

---

### Defense Tactics: How to Protect the Organization

#### 1. Implement the "Verify First" Rule
Never release sensitive information (employee records, passwords, bank routing numbers, network designs) without verifying the identity of the person asking.
*   *Internal Requests:* Call the person back using their listing in the internal directory—never use a number they provide during the call.
*   *External Vendors:* Call the main office line of the vendor to verify the representative's identity.

#### 2. Practice Badge Discipline
*   **Never hold the door** for someone you do not know. Every employee must swipe their badge to enter a secured area.
*   If someone follows you in without swiping, politely direct them to the reception desk: *"I'm sorry, I'm required to ask everyone to swipe their badge or sign in at the front desk."*

#### 3. Establish a Clean Desk Policy
Ensure sensitive papers, notebooks, client rosters, and USB keys are locked away when you leave your desk. Always lock your computer screen (`Windows Key + L` on Windows, or `Ctrl + Cmd + Q` on Mac) when stepping away.

---

## 3. Key Takeaways
1.  **People are the targets:** Social engineers exploit helpfulness, fear, and curiosity.
2.  **Verify, don't trust:** Always verify unexpected requests through independent, official channels.
3.  **Physical security is cybersecurity:** Badge compliance and clean desk habits prevent physical breaches.
4.  **Saying "No" is secure:** Politely refusing access or information until verification is complete is expected and encouraged behavior.

---

## 4. 5-Question Quiz

### Question 1
An individual carrying a stack of heavy boxes walks closely behind you as you swipe your badge to enter a secured office building. They smile and ask you to hold the door. What should you do?
*   A) Hold the door open out of politeness and let them pass.
*   B) Hold the door, but follow them to make sure they look like they belong.
*   C) Politely explain that company policy requires everyone to swipe their badge, and direct them to the front reception desk for assistance.
*   D) Close the door in their face without saying anything.

### Question 2
You find a USB flash drive in the office breakroom. It has a handwritten label that says "Confidential Executive Payroll." What is the SAFEST action to take?
*   A) Plug it into your work computer to find out who it belongs to so you can return it.
*   B) Plug it into a home computer so you don't compromise the corporate network.
*   C) Throw it in the trash bin.
*   D) Do not plug it into any device. Deliver it immediately to the IT Security Team.

### Question 3
A caller claiming to be from "Global Telecom Support" says they need you to verify your company login credentials over the phone to fix a critical network routing issue. How should you respond?
*   A) Give them the credentials to resolve the critical issue quickly.
*   B) Decline to provide the details, hang up, and call the official IT Helpdesk number listed in your company directory to verify.
*   C) Ask the caller to email you a link to reset your credentials.
*   D) Give them fake credentials to waste their time.

### Question 4
What is the name of the social engineering attack where an attacker establishes contact, builds a believable persona or backstory, and uses it to extract sensitive information?
*   A) Baiting
*   B) Tailgating
*   C) Pretexting
*   D) Ransomware

### Question 5
Which keyboard shortcut should you press to instantly lock your Windows computer screen when stepping away from your desk?
*   A) `Ctrl + Alt + Delete`
*   B) `Windows Key + L`
*   C) `Alt + F4`
*   D) `Ctrl + Shift + Esc`

---

## Answer Key & Explanations

1.  **Correct Answer: C**
    *   *Explanation:* Letting someone in without badge validation (tailgating) bypasses physical access controls. Directing them to reception ensures security protocols are maintained politely.
2.  **Correct Answer: D**
    *   *Explanation:* This is a classic physical baiting attack. Plugs-in USBs can run auto-run scripts or hardware exploits that compromise system security. Only IT security should inspect unverified media.
3.  **Correct Answer: B**
    *   *Explanation:* IT support will never ask for your password. By hanging up and calling a known, verified internal number, you ensure you are talking to legitimate staff (verification protocol).
4.  **Correct Answer: C**
    *   *Explanation:* Pretexting involves creating an invented scenario (the pretext) to establish a fake identity and trick the target into releasing data or access.
5.  **Correct Answer: B**
    *   *Explanation:* `Windows Key + L` locks the screen immediately. This prevents unauthorized physical access to your logged-in session while you are away from your workspace.
