# Social Engineering Simulations & Drills

This document outlines scenarios and instructions for conducting safe, ethical, and structured physical and phone-based social engineering drills. These simulations measure compliance with physical security protocols and phone verification procedures.

---

## 1. Rules of Engagement & Safety Guidelines

Before conducting any active social engineering drill, the facilitator must establish boundaries to prevent panic, physical confrontation, or legal issues.

### The Five Safety Rules:
1.  **Do Not Bypass Locks Visually or Physically:** Drills should focus on human behavior (e.g., asking someone to hold the door), not picking locks or climbing windows.
2.  **No High-Stress Threats:** Do not impersonate law enforcement, fire department officials, or government auditors.
3.  **Carry an Authorization Letter (The "Get Out of Jail Free" Card):** The person conducting physical audits must carry a physical letter signed by the Executive Sponsor/CEO stating that they are performing an authorized security test.
4.  **Instant Escalation Stop:** If an employee challenges the tester and calls security or police, the tester must **immediately stop the drill**, present their authorization letter, and congratulate the employee.
5.  **No Public Shaming:** Gather aggregate data. If an employee fails a drill, handle coaching privately.

---

## 2. Physical Drill Scenarios

### Scenario 1: The Tailgating / Piggybacking Drill
*   **Objective:** Test if employees will enforce badge entry rules at the main office doors or secondary secure zones (server rooms, HR file rooms).
*   **The Setup:**
    *   An authorized tester (e.g., an HR team member or IT auditor unknown to the target team) stands near the badge entrance.
    *   The tester holds a cardboard box labeled "Office Supplies" or carries two full cups of coffee.
    *   As an employee swipes their badge and opens the door, the tester walks behind them, saying: *"Thanks! Could you hold that for me? My hands are a bit full today."*
*   **Evaluation Metrics:**
    *   **Success (Pass):** The employee stops the tester, asks them to set the items down and swipe their badge, or directs them to the receptionist.
    *   **Failure (Fail):** The employee holds the door and lets the tester enter the secure zone without swiping their badge.

---

### Scenario 2: Clean Desk and Locked Screen Audit
*   **Objective:** Measure compliance with the Clean Desk Policy and workspace lock rules.
*   **The Setup:**
    *   The facilitator walks through the office during lunch hours or immediately after close-of-business (5:30 PM).
    *   The facilitator inspects unoccupied desks looking for specific vulnerabilities.
*   **What to Look For:**
    *   [ ] Unlocked computer screens (logged in and active).
    *   [ ] Passwords written on sticky notes attached to monitors or keyboards.
    *   [ ] Exposed physical documents marked "Confidential", "Internal Use Only", or containing customer PII.
    *   [ ] Company ID badges left unattended on desks.
    *   [ ] Unencrypted USB keys left sitting on desks.
*   **Feedback Delivery:**
    *   If a desk fails, leave a friendly physical card on the keyboard:
        > **Oops! Your space was audited.**
        >
        > We noticed your computer was left unlocked (or you had papers/badges exposed).
        >
        > **Quick Tip:** Press `Windows Key + L` to lock your screen every time you step away. Protect our data!

---

## 3. Phone Drill Scenarios (Vishing)

### Scenario 3: The Fake IT Support Helpdesk Call
*   **Objective:** Test if employees will reveal internal system configurations or read out MFA verification codes over the phone.
*   **The Script/Pretext:**
    *   *Caller:* *"Hi [Employee Name], this is Alex from the Corporate Network Support team. We are migrating mail accounts to a new cloud server today. We see some synchronization lag on your PC. Can you confirm if you are currently logged in?"*
    *   *If the employee says yes:* *"Great. I am running a quick script to fix your sync. A 6-digit confirmation code should pop up on your authenticator app or phone in just a second. Once it pops up, please read it back to me so I can finalize the connection."*
*   **Evaluation Metrics:**
    *   **Success (Pass):** The employee refuses to provide the code, states that they will call the IT helpdesk back via the official listed internal extension, or hangs up and reports the call.
    *   **Failure (Fail):** The employee reads the MFA code or provides login credentials.

---

### Scenario 4: The Vendor Info-Gathering Call
*   **Objective:** Test if employees will disclose organizational structures, vendor lists, or software tools used to an unverified third party.
*   **The Script/Pretext:**
    *   *Caller:* *"Hello, my name is Sarah, and I am calling from [Reputable Software Provider] Customer Success group. We are preparing our annual software license renewal for your company. I see a discrepancy in the number of seats. Can you tell me what version of Windows your team uses, and which anti-virus is currently installed on your workstation?"*
*   **Evaluation Metrics:**
    *   **Success (Pass):** The employee tells the caller that information regarding systems is restricted and redirects them to IT Procurement or requests their email to verify identity.
    *   **Failure (Fail):** The employee lists details about anti-virus vendors, operating system versions, or internal department sizes.

---

## 4. Scorecard & Reporting Template

Use this template to track outcomes for each drill.

| Date | Drill Type | Department | Total Tested | Pass Count | Fail Count | Pass Rate (%) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `06/15` | Tailgating | Finance Portal | 10 | 7 | 3 | 70% |
| `06/16` | Clean Desk | HR / Admin | 25 | 18 | 7 | 72% |
| `06/17` | Vishing (IT) | Marketing | 8 | 5 | 3 | 62.5% |

### Key Observations & Remediation Actions:
*   *Observation 1:* Tailgating was high in the Finance Department due to the back-door entrance being used for smoke breaks.
*   *Action:* Move badge scanners to a more visible location, install a camera, and conduct a brief 10-minute briefing with the Finance team on badge discipline.
