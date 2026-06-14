# Assessment Scoring Rubric & Interpretation Guide

This rubric is designed to help HR, Training, or Compliance managers score employee assessments (both pre- and post-training), interpret results, identify high-risk areas, and prescribe targeted remediation.

---

## 1. Grading & Performance Tiers

Each assessment contains 15 questions. Assign 1 point for each correct answer (no partial credit).

$$\text{Final Score} = \left( \frac{\text{Correct Answers}}{15} \right) \times 100$$

### Performance Tiers

| Score (Correct Answers) | Percentage | Classification | Action Required |
| :--- | :--- | :--- | :--- |
| **14 - 15** | **93% - 100%** | **Low Risk (Security Champion)** | No immediate action. Eligible to be a departmental "Security Champion". |
| **11 - 13** | **73% - 87%** | **Medium Risk (Aware but Vulnerable)** | Recommend review of specific module sheets matching failed questions. |
| **0 - 10** | **0% - 67%** | **High Risk (Vulnerable)** | **Mandatory** targeted remediation session and re-testing. |

---

## 2. Topic Mapping & Diagnostic Analysis

To identify specific knowledge gaps, use this mapping to see which areas the employee is struggling with.

| Topic Group | Question Numbers | Associated Training Material | Critical Competency Measured |
| :--- | :--- | :--- | :--- |
| **Group A: Phishing** | Questions 1, 2, 3, 4, 5 | `module-1-phishing-awareness.md` | Inspecting sender domains, hovering over links, spotting urgency hooks, handling attachments safely. |
| **Group B: Password Hygiene** | Questions 6, 7, 8, 9, 10 | `module-2-password-hygiene.md` | Passphrase creation, credential reuse risks, MFA mechanics, responding to unexpected MFA prompts, password managers. |
| **Group C: Social Engineering** | Questions 11, 12, 13, 14, 15 | `module-3-social-engineering.md` | Pretexting, physical access controls (tailgating), baiting (USBs), phone scams (vishing), screen lock and clean desk. |

---

## 3. Remediation & Action Plan

Based on the diagnostic scores above, implement the following actions:

### If an Employee Scores in the "High Risk" Tier (0 - 10 Correct):
1.  **Immediate Notification:** Send a supportive, private email notification:
    > *"Hi [Name], thank you for completing the security assessment. To help keep our company safe, we require a quick follow-up on some key security topics. Please review the attached training sheets and schedule a 15-minute sync with the compliance manager."*
2.  **Targeted Review:** Assign the specific training module associated with their lowest-performing topic group (see Section 2).
3.  **One-on-One/Small Group Sync:** The compliance manager conducts a brief, interactive review of the failed concepts (using the `facilitator-guide.md` guidelines).
4.  **Re-Assessment:** The employee retakes the assessment (or the alternate assessment) within 14 days of the sync. A score of 80% (12/15) is required to pass.

---

## 4. Identifying Departmental Risk Profiles

Security vulnerability is often cultural. Analyze aggregate scores by department to identify systemic risks:

### Scenario 1: The Finance Department has a low Phishing score.
*   **The Risk:** High threat of Business Email Compromise (BEC) or wire fraud.
*   **Remediation:** Conduct a dedicated live session of `facilitator-guide.md` focusing on "Activity A: Spot the Phish", tailored specifically with financial and invoice spoofing scenarios.

### Scenario 2: The Administration/Operations Department has a low Social Engineering score.
*   **The Risk:** High vulnerability to physical intruders (tailgating) or phone scams (vishing).
*   **Remediation:** Conduct a physical audit (clean desk check) and an in-person briefing on visitor management and badge discipline.

### Scenario 3: The Engineering Department has a low Password score.
*   **The Risk:** Potential exposure of database keys or developer credentials.
*   **Remediation:** Mandatory deployment of corporate-managed password managers and enforcement of hardware security keys (FIDO2).
