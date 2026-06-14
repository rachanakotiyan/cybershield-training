/* ==========================================================================
   CyberShield Quiz Data Bank
   ========================================================================== */

const quizData = {
    module1: [
        {
            question: "What is the primary indicator that an email is a phishing attempt rather than a legitimate corporate message?",
            options: [
                "It has a blue corporate logo header.",
                "It uses the display name of a trusted entity but has an unrelated sender email domain.",
                "It was sent outside of normal business hours.",
                "It contains more than two paragraphs of text."
            ],
            answer: 1,
            explanation: "Display names can easily be customized, but the sender's actual domain address cannot be spoofed to match a real service. Always inspect the domain after the @ symbol."
        },
        {
            question: "An email warns that your company account will be locked in 1 hour if you do not verify your login details. What trigger is this?",
            options: [
                "Curiosity",
                "Authority",
                "Urgency",
                "Greed"
            ],
            answer: 2,
            explanation: "Urgency triggers panic and bypasses critical thinking by pressuring the user to act quickly to avoid negative consequences."
        },
        {
            question: "How can you safely determine the true destination of a hyperlink in an email before clicking it?",
            options: [
                "Hover your cursor over the link without clicking to view the destination URL.",
                "Click it in private browsing mode.",
                "Search the display name of the link in Google.",
                "Copy and paste it into a blank email draft."
            ],
            answer: 0,
            explanation: "Hovering over a link displays a preview of the actual URL in the bottom status bar or a tooltip, showing where it leads before any network connection is made."
        },
        {
            question: "You receive an unexpected email from 'HR Payroll' with a file named 'Bonus_Proposals_Q3.zip'. What is the safest course of action?",
            options: [
                "Extract the zip folder to see if your name is inside.",
                "Forward the file to your colleagues.",
                "Report the email and do not download or open the attachment.",
                "Open the attachment only on a home computer."
            ],
            answer: 2,
            explanation: "Unexpected files ending in executable or compressed formats (.zip, .exe) often contain scripts that install malware. Never open unexpected attachments."
        },
        {
            question: "Which of the following email addresses is the most suspicious look-alike domain for 'microsoft.com'?",
            options: [
                "support@microsoft.com",
                "security-alerts@microsoft.com",
                "login@microsoft-support-portal.info",
                "billing@office.microsoft.com"
            ],
            answer: 2,
            explanation: "microsoft-support-portal.info is an external domain trying to look official. Legitimate subdomains must end in microsoft.com (like office.microsoft.com)."
        }
    ],
    
    module2: [
        {
            question: "What is the primary security benefit of using a 'passphrase' instead of a traditional complex password?",
            options: [
                "Passphrases are automatically updated by the system.",
                "Passphrases are longer, making them exponentially harder for computers to crack while remaining easy for humans to remember.",
                "Passphrases do not require Multi-Factor Authentication.",
                "Passphrases are encrypted automatically by the operating system."
            ],
            answer: 1,
            explanation: "The math of brute-forcing passwords favors length over character complexity. A 28-character passphrase (e.g. correct-horse-battery-staple) is much stronger than a 10-character complex string."
        },
        {
            question: "Why is password reuse across multiple accounts (corporate and personal) considered a high security risk?",
            options: [
                "It slows down the browser login cache.",
                "If one account is breached elsewhere, hackers can use those leaked credentials to access your other accounts (credential stuffing).",
                "It violates copyright laws.",
                "It causes email synchronization errors."
            ],
            answer: 1,
            explanation: "Credential stuffing is an automated attack where hackers feed leaked usernames and passwords into other sites. Unique passwords ensure a breach at one site doesn't compromise others."
        },
        {
            question: "Which of the following represents a 'Something You Have' authentication factor in Multi-Factor Authentication?",
            options: [
                "Your Master Password vault PIN.",
                "An authenticator app code generated on your smartphone.",
                "Your fingerprint scan.",
                "The answers to your security questions."
            ],
            answer: 1,
            explanation: "An authenticator code on your smartphone represents something you physically possess. Passwords and PINs are 'Something You Know', while fingerprints are 'Something You Are'."
        },
        {
            question: "If you receive a notification asking you to approve an MFA login request that you did not prompt, what does this indicate?",
            options: [
                "A system synchronization error is occurring.",
                "An attacker has successfully stolen your password and is attempting to bypass MFA. You must deny the request and change your password.",
                "Your password manager is executing a backup cycle.",
                "The server admin is auditing your connection."
            ],
            answer: 1,
            explanation: "An unsolicited MFA alert means the attacker successfully guessed or stole your password, but is blocked by MFA. You must immediately reject the attempt and update your password."
        },
        {
            question: "How does an approved password manager help prevent phishing attacks?",
            options: [
                "It blocks spam emails from arriving in your inbox.",
                "It will not autofill your credentials on a fake look-alike website because the domain does not match your saved credentials.",
                "It alerts local law enforcement of suspicious sites.",
                "It encrypts the entire router connection."
            ],
            answer: 1,
            explanation: "Password managers store credentials linked to specific domain names. If you visit a spoofed domain (e.g. paypa1.com), the manager will not autofill your paypal.com login details."
        }
    ],

    module3: [
        {
            question: "What is pretexting in social engineering?",
            options: [
                "Sending fraudulent text messages (SMS phishing).",
                "Developing an invented scenario or fake identity to manipulate someone into releasing information or physical access.",
                "Inserting malware-loaded USB flash drives into server racks.",
                "Bypassing firewalls using technical code vulnerabilities."
            ],
            answer: 1,
            explanation: "Pretexting is the act of creating a believable pretext (fake role, relationship, or crisis) to lower the victim's suspicion and trick them into violating security rules."
        },
        {
            question: "An unknown person holding a coffee tray walks behind you through a secure badge entry point. What is this security threat called?",
            options: [
                "Spear phishing",
                "Baiting",
                "Tailgating",
                "Vishing"
            ],
            answer: 2,
            explanation: "Tailgating (or piggybacking) occurs when an unauthorized person follows an authorized employee through a badge-secured checkpoint to gain physical access."
        },
        {
            question: "You find an unmarked USB flash drive in the office elevator. What is the safest course of action?",
            options: [
                "Plug it into your home computer to check for malware.",
                "Plug it in at work to find the owner's files and return it.",
                "Deliver it to the IT Security team without plugging it into any device.",
                "Discard it in the standard office trash bin."
            ],
            answer: 2,
            explanation: "This is a classic baiting attempt. USB drives can carry auto-run scripts or hardware chips that instantly compromise the connected system. Always hand unverified media to IT."
        },
        {
            question: "A caller claiming to be from the company's utility provider demands you verify the model of the office router over the phone. How should you respond?",
            options: [
                "Provide the details immediately to avoid utility disruptions.",
                "Refuse, explain that router configurations are confidential, hang up, and report the caller.",
                "Give them a fake model number to protect the network.",
                "Ask the caller to text the request to your phone."
            ],
            answer: 1,
            explanation: "This is a vishing (voice phishing) information-gathering call. You must always decline to disclose details about internal infrastructure and verify caller identity through official lists."
        },
        {
            question: "Which keyboard shortcut locks your Windows desktop session immediately when leaving your desk?",
            options: [
                "Ctrl + Shift + Esc",
                "Windows Key + L",
                "Alt + F4",
                "Ctrl + Alt + Delete"
            ],
            answer: 1,
            explanation: "Windows Key + L locks the screen instantly, preventing physical access to your corporate profile while you are away."
        }
    ]
};
