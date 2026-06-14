# Phishing Simulation Plan

This document outlines a practical, step-by-step plan for running benign, internal phishing simulations. The goal is to gauge employee vulnerability in a safe environment, reinforce training, and measure the reporting rate over time.

---

## 1. Step-by-Step Campaign Playbook

```
[Define Scope] ---> [Configure Whitelists] ---> [Select Templates] ---> [Launch & Track] ---> [Coaching Loop]
```

### Phase 1: Planning and Approvals (Weeks 1-2 before launch)
1.  **Define Target Groups:** Decide if the campaign will target the entire organization or specific high-risk departments (e.g., Finance, HR, Executive leadership).
2.  **Executive Sign-off:** Ensure management and IT are aware of the simulation dates to prevent false-alarm investigations.
3.  **IT Coordination:** Coordinate with your IT/Mail administrator to whitelist the simulation IP addresses or domains in your spam filter so they bypass technical blocks.

### Phase 2: Selection of Scenarios (Week 1 before launch)
Select templates that mirror real-world threats. Rotate templates to prevent employees from warning each other ("the campfire effect").
*   *Difficulty Level:* Start with "easy" phishing templates (obvious typos, misaligned URLs) and progress to "medium" or "hard" templates (sophisticated look-alikes) as training progresses.

### Phase 3: Launch & Data Collection (Simulation Week)
1.  **Staggered Delivery:** Schedule the emails to be sent randomly over a 5-day window so employees don't receive them all at once.
2.  **Collection Window:** Keep the simulation active for 7 days to capture data from employees who are out of the office or check email late.
3.  **No Interventions:** Do not confirm if the email is a test if asked directly by employees during the active window; encourage them to report it using standard channels.

### Phase 4: Analysis and Coaching (Post-Simulation Week)
1.  **Review Metrics:** Gather click rates, open rates, and report rates.
2.  **Deliver Coaching:** Direct employees who clicked to a brief, positive training landing page.
3.  **Reward Reporters:** Send a brief thank-you message to employees who reported the email.

---

## 2. Benign Email Templates

Below are three pre-written, benign phishing templates ranging in difficulty.

### Template 1: Urgent Password Expiration (Difficulty: Easy)
*   **Sender Display Name:** IT Helpdesk Portal
*   **Sender Email Address:** `helpdesk@corporate-security-update.com` (Fake domain)
*   **Subject:** Action Required: Your password expires in 24 hours
*   **Email Body:**
    > Dear Employee,
    >
    > Your corporate login password is scheduled to expire in 24 hours. Failure to update your credentials will result in immediate loss of access to email, Teams, and the shared files database.
    >
    > Please click the link below to verify your current password and choose a new one:
    >
    > `[Update Password Now]` (Points to: `http://corporate-login.security-verify.net/reset`)
    >
    > Thank you,
    > IT Support Services Group
*   **Red Flags:** Generic greeting, extreme urgency (24 hours), fake domain name in sender address, non-secure `http` link.

---

### Template 2: Document Share Notification (Difficulty: Medium)
*   **Sender Display Name:** OneDrive Document Manager
*   **Sender Email Address:** `no-reply@onedrive-share-notify.org` (Fake domain)
*   **Subject:** HR Department shared "Q3_Salary_Review_and_Bonus_Structure.xlsx" with you
*   **Email Body:**
    > Hello,
    >
    > A file has been shared with you via Microsoft OneDrive.
    >
    > **File Name:** Q3_Salary_Review_and_Bonus_Structure.xlsx
    > **Shared By:** HR Payroll Department
    >
    > To view the file, click the secure link below:
    >
    > `[Access Shared Document]` (Points to: `https://onedrive.corporate-portal-login.net/view`)
    >
    > This link will expire in 7 days.
*   **Red Flags:** Curious/enticing topic (bonuses), generic greeting, sender domain is `.org` instead of `.com`, link goes to a look-alike login page instead of the real OneDrive URL.

---

### Template 3: HR Policy Update (Difficulty: Hard / Contextual)
*   **Sender Display Name:** Human Resources Department
*   **Sender Email Address:** `hr-announcements@ourcompany-hr-portal.com` (Very close look-alike)
*   **Subject:** IMPORTANT: New Remote Work Policy & Holiday Schedule
*   **Email Body:**
    > Team,
    >
    > Management has updated the official Remote Work Policy and released the revised Q4 Holiday Schedule. These changes affect core working hours and holiday pay structure.
    >
    > All employees are required to review the document and digitally sign the acknowledgement form by the end of the week.
    >
    > You can access the document portal here:
    >
    > `[View Remote Work Policy]` (Points to: `https://ourcompany.sign-portal-login.com/form`)
    >
    > Regards,
    > HR Team
*   **Red Flags:** The sender address is slightly off (using `ourcompany-hr-portal.com` instead of the official domain `ourcompany.com`), link directs to an external signing portal that requests corporate domain logins.

---

## 3. Tracking Metrics

To evaluate vulnerability and improvement, track these five key metrics:

$$\text{Delivery Rate} = \frac{\text{Emails Delivered}}{\text{Emails Sent}} \times 100$$

$$\text{Open Rate} = \frac{\text{Emails Opened}}{\text{Emails Delivered}} \times 100$$

$$\text{Click Rate} = \frac{\text{Employees who Clicked Link}}{\text{Emails Delivered}} \times 100$$

$$\text{Compromise Rate} = \frac{\text{Employees who Submitted Credentials/Downloaded File}}{\text{Emails Delivered}} \times 100$$

$$\text{Reporting Rate} = \frac{\text{Employees who Reported Email}}{\text{Emails Delivered}} \times 100$$

---

## 4. Feedback & Coaching Process

The objective of a simulation is **education, not punishment**. Creating a culture of fear will cause employees to hide mistakes or avoid reporting actual incidents.

### If an Employee Clicks (The Coaching Flow):
1.  **Instant Landing Page:** When they click the link, redirect them to a friendly, positive landing page rather than a scary "You are hacked!" warning.
2.  **The Message:**
    > **Oops! This was a friendly test.**
    >
    > Don't worry, your account is safe! This was a simulated phishing email sent by the Security Team to help us practice.
    >
    > **Here is what you could have spotted:**
    > *   The sender email domain was `security-verify.net`, not our official company domain.
    > *   The email created a sense of panic/urgency.
    >
    > **What to do next time:** Hover over links, check the sender address carefully, and report suspicious emails. Keep up the learning!
3.  **No Public Shaming:** Do not publish lists of people who failed. Keep individual failure data restricted to HR/Security coordinators for coaching.

### If an Employee Reports (The Positive Loop):
1.  **Automated Response:** When an employee clicks the "Report Phishing" button or forwards the email to security, send an instant notification:
    > **Awesome Job!**
    >
    > You successfully spotted and reported a simulated phishing email.
    >
    > By reporting, you help us identify attacks and protect the entire company. You are a valued part of our Human Firewall!
2.  **Recognition:** Consider monthly incentives (e.g., a "Security Champion of the Month" callout, a digital badge, or a coffee voucher) for the fastest reporter.
