# Program Key Performance Indicators (KPIs) & Metrics

To prove the return on investment (ROI) of the Security Awareness Training Program, the organization must measure behaviors and knowledge over time. This document defines the core KPIs to track, how to calculate them, and their target benchmarks.

---

## 1. Summary of Program Metrics

| Metric | Focus | Data Source | Measurement Frequency | Target Benchmark |
| :--- | :--- | :--- | :--- | :--- |
| **Completion Rate** | Participation | LMS / Attendance records | Annually | **100%** of all employees |
| **Click Rate** | Vulnerability | Phishing Simulation Tool | Quarterly | **< 5%** (industry average: 15-20%) |
| **Reporting Rate** | Active Defense | Phishing Simulation Tool / Outlook Reports | Quarterly | **> 50%** |
| **Knowledge Gain (Delta)** | Learning | Pre vs. Post Assessment scores | Per training cycle | **+25% increase** in average score |
| **Mean Time to Report (MTTR)** | Speed | Incident response logs | Quarterly | **< 15 minutes** from delivery |
| **Real Incident Volume** | Real-world impact | IT Helpdesk logs | Monthly / Annually | **-40% reduction** in credential leaks |

---

## 2. KPI Formulas & Calculations

### A. Training Completion Rate
Measures organizational coverage. High compliance reduces the chance of a weak link in the organization.

$$\text{Completion Rate} = \left( \frac{\text{Employees who Completed Modules 1-3}}{\text{Total Active Employees}} \right) \times 100$$

### B. Phishing Simulation Click Rate
Measures vulnerability. A click represents a potential entry point for a real attacker.

$$\text{Click Rate} = \left( \frac{\text{Unique Employees who Clicked a Simulation Link}}{\text{Total Simulation Emails Delivered}} \right) \times 100$$

### C. Phishing Reporting Rate
Measures active engagement. An employee reporting a suspicious email represents a defensive success.

$$\text{Reporting Rate} = \left( \frac{\text{Unique Employees who Clicked the 'Report' Button}}{\text{Total Simulation Emails Delivered}} \right) \times 100$$

### D. Knowledge Gain (Assessment Delta)
Measures the effectiveness of the curriculum in teaching security principles.

$$\text{Knowledge Gain} = \text{Average Post-Training Score (\%)} - \text{Average Pre-Training Score (\%)} $$
*   *Example:* If the baseline average was 60% and the post-training average is 85%, the Knowledge Gain is **+25%**.

### E. Mean Time to Report (MTTR)
Measures the speed of defense. The faster an employee reports an email, the sooner IT can block the sender and protect other employees who haven't opened it yet.

$$\text{MTTR} = \frac{\sum (\text{Time of Employee Report} - \text{Time of Email Delivery})}{\text{Total Reports Received}}$$

---

## 3. Interpreting Metric Trajectories

Security managers should look at the relation between **Click Rate** and **Reporting Rate** over successive quarters. The diagram below illustrates the ideal trajectory:

```
Quarter 1:  [Click Rate: 20%]   ======>   [Reporting Rate: 10%]    (High Risk)
Quarter 2:  [Click Rate: 12%]   ======>   [Reporting Rate: 25%]    (Improving)
Quarter 3:  [Click Rate: 8%]    ======>   [Reporting Rate: 40%]    (Active Defense)
Quarter 4:  [Click Rate: 3%]    ======>   [Reporting Rate: 55%]    (Strong Human Firewall)
```

*   **Low Click Rate + Low Reporting Rate:** Indicates employees are deleting suspicious emails but not reporting them. The security team remains blind to active threats.
*   **Low Click Rate + High Reporting Rate (Target):** Indicates employees are highly alert, avoiding traps, and actively helping security teams detect attacks in real-time.
