/* ==========================================================================
   CyberShield Main Application Controller
   ========================================================================== */

// 1. Navbar Mobile Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");
    });
}

// Helper: Formats current date to YYYY-MM-DD
function getFormattedDate() {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
}

// Helper: Show Toast Notification
function showToast(message) {
    let toast = document.getElementById("toastNotification");
    let toastMsg = document.getElementById("toastMessage");

    // If a toast container isn't present on the page, create one so notifications still appear.
    if (!toast || !toastMsg) {
        toast = document.createElement('div');
        toast.id = 'toastNotification';
        toast.className = 'toast';
        toast.style.display = 'none';

        toastMsg = document.createElement('span');
        toastMsg.id = 'toastMessage';
        toast.appendChild(toastMsg);

        document.body.appendChild(toast);
    }

    toastMsg.textContent = message;
    toast.style.display = 'flex';

    // Clear any previous timeout and hide after delay
    if (toast._timeoutId) clearTimeout(toast._timeoutId);
    toast._timeoutId = setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
}

// ==========================================================================
// A. DASHBOARD PAGE LOGIC (index.html)
// ==========================================================================
function initDashboard() {
    const onboardingCard = document.getElementById("onboardingCard");
    const mainDashboard = document.getElementById("mainDashboard");
    
    if (!onboardingCard || !mainDashboard) return; // Not on dashboard page

    const state = getAppState();

    // Toggle setup panel vs dashboard
    if (!state.employeeName) {
        onboardingCard.style.display = "block";
        mainDashboard.style.display = "none";
    } else {
        onboardingCard.style.display = "none";
        mainDashboard.style.display = "grid";
        updateDashboardContent(state);
    }

    // Name Setup Submit
    const btnStartTraining = document.getElementById("btnStartTraining");
    const employeeNameInput = document.getElementById("employeeName");
    if (btnStartTraining && employeeNameInput) {
        btnStartTraining.addEventListener("click", () => {
            const name = employeeNameInput.value.trim();
            if (!name) {
                alert("Please enter a valid name to proceed.");
                return;
            }
            state.employeeName = name;
            saveAppState(state);
            
            // Reload & Sync navigation
            onboardingCard.style.display = "none";
            mainDashboard.style.display = "grid";
            syncNavigationAndUser();
            updateDashboardContent(state);
            showToast(`Portal initialized for Agent ${name}`);
        });
    }

    // Reset Data
    const btnResetData = document.getElementById("btnResetData");
    if (btnResetData) {
        btnResetData.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete all training scores, credentials, and progress?")) {
                resetAppState();
                window.location.reload();
            }
        });
    }
}

function updateDashboardContent(state) {
    // 1. Overall progress calculations
    const modules = ['module1', 'module2', 'module3'];
    let completedCount = 0;
    modules.forEach(m => {
        if (state.progress[m] === "completed") completedCount++;
    });

    const completionRatio = document.getElementById("completionRatio");
    const overallProgressBar = document.getElementById("overallProgressBar");
    
    if (completionRatio) completionRatio.textContent = `${completedCount} of 3 Completed`;
    if (overallProgressBar) {
        overallProgressBar.style.width = `${(completedCount / 3) * 100}%`;
    }

    // 2. Sync Module Cards UI
    modules.forEach(m => {
        const card = document.getElementById(`cardModule${m.charAt(m.length-1)}`);
        const badge = document.getElementById(`badgeMod${m.charAt(m.length-1)}`);
        const btn = document.getElementById(`btnMod${m.charAt(m.length-1)}`);
        const status = state.progress[m];

        if (card && badge && btn) {
            // Remove previous classes
            card.classList.remove("locked");
            badge.className = "module-badge";

            if (status === "locked") {
                card.classList.add("locked");
                badge.classList.add("badge-locked");
                badge.textContent = "Locked";
                btn.className = "btn btn-secondary";
                btn.textContent = "Locked";
                btn.style.pointerEvents = "none";
            } else if (status === "available") {
                badge.classList.add("badge-available");
                badge.textContent = "Available";
                btn.className = "btn btn-primary";
                btn.textContent = "Start Training";
                btn.style.pointerEvents = "auto";
            } else if (status === "completed") {
                badge.classList.add("badge-completed");
                badge.textContent = "Completed";
                btn.className = "btn btn-secondary";
                btn.textContent = "Retake Training";
                btn.style.pointerEvents = "auto";
            }
        }
    });

    // 3. Stats Sidebar
    const statCompleted = document.getElementById("statCompleted");
    const statAvgScore = document.getElementById("statAvgScore");
    const statSimStatus = document.getElementById("statSimStatus");

    if (statCompleted) statCompleted.textContent = `${completedCount} / 3`;
    
    // Average Quiz Score calculation
    let scoredModulesCount = 0;
    let scoresSum = 0;
    modules.forEach(m => {
        if (state.scores[m] !== null) {
            scoresSum += state.scores[m];
            scoredModulesCount++;
        }
    });
    
    if (statAvgScore) {
        const avg = scoredModulesCount > 0 ? Math.round(scoresSum / scoredModulesCount) : 0;
        statAvgScore.textContent = `${avg}%`;
    }

    if (statSimStatus) {
        statSimStatus.textContent = state.scores.sim !== null ? `${state.scores.sim}%` : "Not Run";
    }

    // 4. Update Badges
    const badgePhish = document.getElementById("badgePhish");
    const badgePass = document.getElementById("badgePass");
    const badgeSocial = document.getElementById("badgeSocial");

    if (badgePhish && state.badges.includes("phish")) badgePhish.classList.add("earned");
    if (badgePass && state.badges.includes("pass")) badgePass.classList.add("earned");
    if (badgeSocial && state.badges.includes("social")) badgeSocial.classList.add("earned");
}

// ==========================================================================
// B. MODULE TABS & READING CHECKLISTS
// ==========================================================================
function initModuleTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const contentSections = document.querySelectorAll(".content-section");

    if (tabBtns.length === 0) return; // Not on a module page

    // Tab Button Clicking
    tabBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            switchTab(index);
        });
    });

    // Sub-Navigation Buttons (Next/Back at bottom of sections)
    const nextBtns = document.querySelectorAll(".next-section-btn");
    const prevBtns = document.querySelectorAll(".prev-section-btn");

    nextBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const nextIdx = parseInt(btn.getAttribute("data-next"));
            switchTab(nextIdx);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const prevIdx = parseInt(btn.getAttribute("data-prev"));
            switchTab(prevIdx);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function switchTab(index) {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const contentSections = document.querySelectorAll(".content-section");

    tabBtns.forEach(b => b.classList.remove("active"));
    contentSections.forEach(s => s.classList.remove("active"));

    if (tabBtns[index]) tabBtns[index].classList.add("active");
    if (contentSections[index]) contentSections[index].classList.add("active");
}

// Module 1 Interactive Checkboxes
function initModule1Checklist() {
    const checklists = document.querySelectorAll(".checklist-item");
    checklists.forEach(item => {
        const checkbox = item.querySelector("input[type='checkbox']");
        
        // Prevent default label click double triggering
        item.addEventListener("click", (e) => {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
            }
            item.classList.toggle("checked", checkbox.checked);
        });
    });
}

// ==========================================================================
// C. MODULE 2: PASSWORD STRENGTH CHECKER
// ==========================================================================
function initPasswordStrengthChecker() {
    const input = document.getElementById("chkPasswordInput");
    const strengthBar = document.getElementById("strengthBar");
    const strengthText = document.getElementById("strengthText");

    if (!input || !strengthBar || !strengthText) return;

    input.addEventListener("input", () => {
        const val = input.value;
        const checks = {
            length: val.length >= 12,
            upper: /[A-Z]/.test(val),
            lower: /[a-z]/.test(val),
            number: /[0-9]/.test(val),
            special: /[^A-Za-z0-9]/.test(val)
        };

        let score = 0;
        
        // Update checklist display and calculate score
        Object.keys(checks).forEach(key => {
            const critItem = document.getElementById(`crit${key.charAt(0).toUpperCase() + key.slice(1)}`);
            if (critItem) {
                if (checks[key] && val.length > 0) {
                    critItem.classList.add("met");
                    score++;
                } else {
                    critItem.classList.remove("met");
                }
            }
        });

        // Set strength bar values
        strengthBar.className = "strength-bar-fill";
        if (val.length === 0) {
            strengthBar.style.width = "0%";
            strengthText.textContent = "Empty";
            strengthText.style.color = "var(--text-dim)";
        } else if (score <= 2) {
            strengthBar.style.width = "30%";
            strengthBar.classList.add("strength-weak");
            strengthText.textContent = "Weak Password";
            strengthText.style.color = "var(--danger)";
        } else if (score <= 4) {
            strengthBar.style.width = "65%";
            strengthBar.classList.add("strength-medium");
            strengthText.textContent = "Medium Security";
            strengthText.style.color = "var(--warning)";
        } else {
            strengthBar.style.width = "100%";
            strengthBar.classList.add("strength-strong");
            strengthText.textContent = "Strong Passphrase";
            strengthText.style.color = "var(--success)";
        }
    });
}

// ==========================================================================
// D. MODULE 3: SCENARIO SIMULATOR
// ==========================================================================
function initScenarioSimulator() {
    const optButtons = document.querySelectorAll(".btn-scen-opt");
    
    optButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const isCorrect = btn.getAttribute("data-correct") === "true";
            const scenId = btn.getAttribute("data-scen");
            const feedbackBox = document.getElementById(`scenFeedback${scenId}`);
            
            // Highlight buttons
            const card = document.getElementById(`scen${scenId}`);
            const siblings = card.querySelectorAll(".btn-scen-opt");
            siblings.forEach(sib => {
                sib.disabled = true;
                if (sib.getAttribute("data-correct") === "true") {
                    sib.style.borderColor = "var(--success)";
                    sib.style.color = "var(--success)";
                } else {
                    sib.style.borderColor = "var(--danger)";
                    sib.style.color = "var(--danger)";
                }
            });

            // Set explanations
            let explanationText = "";
            if (scenId === "1") {
                explanationText = isCorrect 
                    ? "Correct! Offer to carry items while they swipe, or direct them to front reception. Never hold security doors for unbadged visitors."
                    : "Incorrect. Letting someone slide in behind you (tailgating) allows unauthorized intruders directly into the building.";
            } else if (scenId === "2") {
                explanationText = isCorrect
                    ? "Correct! IT support will never ask for your multi-factor verification token codes. Verification by callback prevents voice scam bypass."
                    : "Incorrect. Giving verification tokens over the phone allows attackers who already stole your password to log in.";
            } else if (scenId === "3") {
                explanationText = isCorrect
                    ? "Correct! Flash drives found in public places often contain malicious payloads that execute when connected. Deliver them straight to security."
                    : "Incorrect. Connecting unknown USB keys at home exposes your personal networks to viruses. Never plug in unverified devices.";
            }

            feedbackBox.className = "scenario-feedback " + (isCorrect ? "feedback-correct" : "feedback-incorrect");
            feedbackBox.textContent = explanationText;
        });
    });
}

// ==========================================================================
// E. QUIZ SYSTEM ENGINE
// ==========================================================================
let quizAnswersSelected = {};

function initQuizEngine() {
    const container = document.getElementById("quizContainer");
    if (!container) return;

    // Detect which module we are currently on
    const currentPage = window.location.pathname.split("/").pop();
    let moduleKey = "";
    if (currentPage === "module1.html") moduleKey = "module1";
    if (currentPage === "module2.html") moduleKey = "module2";
    if (currentPage === "module3.html") moduleKey = "module3";

    if (!moduleKey) return;

    const questions = quizData[moduleKey];
    quizAnswersSelected = {};

    // Render Quiz Questions
    container.innerHTML = "";
    questions.forEach((q, qIndex) => {
        const qCard = document.createElement("div");
        qCard.className = "card";
        qCard.style.marginBottom = "1.5rem";
        qCard.style.background = "rgba(0,0,0,0.15)";
        
        let optionsHTML = "";
        q.options.forEach((opt, oIndex) => {
            optionsHTML += `
                <div class="quiz-option" data-qi="${qIndex}" data-oi="${oIndex}">
                    <input type="radio" name="q_${qIndex}" id="q_${qIndex}_o_${oIndex}" value="${oIndex}">
                    <label for="q_${qIndex}_o_${oIndex}" style="cursor:pointer; width:100%;">${opt}</label>
                </div>
            `;
        });

        qCard.innerHTML = `
            <div class="quiz-question">${qIndex + 1}. ${q.question}</div>
            <div class="quiz-options">${optionsHTML}</div>
            <div class="quiz-feedback-box" id="q_${qIndex}_feedback" style="display:none;"></div>
        `;
        container.appendChild(qCard);
    });

    // Setup Option selection cards
    const optionCards = container.querySelectorAll(".quiz-option");
    optionCards.forEach(card => {
        card.addEventListener("click", () => {
            const qIndex = card.getAttribute("data-qi");
            const oIndex = card.getAttribute("data-oi");
            
            // Select radio inside
            const radio = card.querySelector("input[type='radio']");
            radio.checked = true;

            // Highlight chosen card
            const siblings = container.querySelectorAll(`.quiz-option[data-qi="${qIndex}"]`);
            siblings.forEach(sib => sib.classList.remove("selected"));
            card.classList.add("selected");

            quizAnswersSelected[qIndex] = parseInt(oIndex);
        });
    });

    // Submit handler
    const btnSubmitQuiz = document.getElementById("btnSubmitQuiz");
    if (btnSubmitQuiz) {
        btnSubmitQuiz.addEventListener("click", () => {
            const qCount = questions.length;
            const answeredCount = Object.keys(quizAnswersSelected).length;

            if (answeredCount < qCount) {
                alert(`Please answer all ${qCount} questions before submitting.`);
                return;
            }

            // Ensure user wants their score recorded. Prompt for name if not set.
            const appState = getAppState();
            let willSaveScore = !!appState.employeeName;
            if (!willSaveScore) {
                const nameInput = prompt("Enter your name to save your score (Cancel to submit as Guest):");
                if (nameInput === null) {
                    // User chose to remain Guest — confirm they still want to submit without saving
                    if (!confirm("You are submitting as Guest. Your score and progress will not be saved. Continue?")) {
                        return;
                    }
                    willSaveScore = false;
                } else {
                    const trimmed = nameInput.trim();
                    if (!trimmed) {
                        alert("Name cannot be empty. Please enter a valid name to save your score.");
                        return;
                    }
                    appState.employeeName = trimmed;
                    saveAppState(appState);
                    syncNavigationAndUser();
                    showToast(`Agent profile saved: ${trimmed}`);
                    willSaveScore = true;
                }
            }

            // Grade questions
            let correctCount = 0;
            questions.forEach((q, qIndex) => {
                const selected = quizAnswersSelected[qIndex];
                const feedbackBox = document.getElementById(`q_${qIndex}_feedback`);
                
                // Color formatting options
                const options = container.querySelectorAll(`.quiz-option[data-qi="${qIndex}"]`);
                options.forEach(opt => {
                    const oIndex = parseInt(opt.getAttribute("data-oi"));
                    const inputRadio = opt.querySelector("input");
                    inputRadio.disabled = true;
                    opt.style.pointerEvents = "none";

                    if (oIndex === q.answer) {
                        opt.style.borderColor = "var(--success)";
                        opt.style.background = "rgba(0, 230, 118, 0.05)";
                    } else if (oIndex === selected) {
                        opt.style.borderColor = "var(--danger)";
                        opt.style.background = "rgba(255, 23, 68, 0.05)";
                    }
                });

                if (selected === q.answer) {
                    correctCount++;
                    feedbackBox.className = "quiz-feedback-box feedback-box-correct";
                    feedbackBox.innerHTML = `<strong>✓ Correct!</strong> ${q.explanation}`;
                } else {
                    feedbackBox.className = "quiz-feedback-box feedback-box-incorrect";
                    feedbackBox.innerHTML = `<strong>✗ Incorrect.</strong> The correct answer was: <em>${q.options[q.answer]}</em>.<br>${q.explanation}`;
                }
                feedbackBox.style.display = "block";
            });

            // Update UI Score Overlay
            const resultsPanel = document.getElementById("quizResultsPanel");
            const resultMsg = document.getElementById("quizResultMessage");
            const resultAdvice = document.getElementById("quizResultAdvice");
            const btnComplete = document.getElementById("btnCompleteModule");
            const btnRetake = document.getElementById("btnRetakeQuiz");

            const percentScore = Math.round((correctCount / qCount) * 100);
            
            // Record state progress
            recordQuizCompletion(moduleKey, correctCount);

            if (resultsPanel) {
                resultsPanel.style.display = "block";
                resultMsg.textContent = `You Scored ${percentScore}% (${correctCount}/5)`;
                btnSubmitQuiz.style.display = "none";

                if (percentScore >= 80) {
                    resultAdvice.textContent = "Congratulations! You have passed this module audit.";
                    resultAdvice.style.color = "var(--success)";
                    if (btnComplete) {
                        btnComplete.style.display = "inline-flex";
                        btnComplete.onclick = () => { window.location.href = "index.html"; };
                    }
                    if (btnRetake) btnRetake.style.display = "none";
                } else {
                    resultAdvice.textContent = "Passing score is 80% (4/5). Please review content and try again.";
                    resultAdvice.style.color = "var(--danger)";
                    if (btnComplete) btnComplete.style.display = "none";
                    if (btnRetake) {
                        btnRetake.style.display = "inline-flex";
                        btnRetake.onclick = () => { window.location.reload(); };
                    }
                }

                // Smooth scroll to results panel
                resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        });
    }
}

// ==========================================================================
// F. PHISHING EMAIL SIMULATION CLIENT (simulations.html)
// ==========================================================================
function initSimulationDrill() {
    const hotspots = document.querySelectorAll(".hotspot");
    const simScoreText = document.getElementById("simScoreText");
    const simProgressBar = document.getElementById("simProgressBar");
    const simCompleteMessage = document.getElementById("simCompleteMessage");
    const btnReportEmail = document.getElementById("btnReportEmail");
    const simulationUserEmail = document.getElementById("simulationUserEmail");

    if (hotspots.length === 0) return; // Not on simulations page

    const state = getAppState();
    
    // Customize target email recipient details
    if (simulationUserEmail && state.employeeName) {
        const sanitized = state.employeeName.toLowerCase().replace(/\s+/g, '.');
        simulationUserEmail.textContent = `${sanitized}@company-vault.com`;
    }

    let foundFlags = new Set();

    hotspots.forEach(spot => {
        spot.addEventListener("click", () => {
            const flagId = spot.getAttribute("data-id");
            if (!foundFlags.has(flagId)) {
                foundFlags.add(flagId);
                spot.classList.add("found");

                // Update UI Counter
                const foundCount = foundFlags.size;
                if (simScoreText) simScoreText.textContent = `${foundCount} of 4 Red Flags Spotted`;
                if (simProgressBar) simProgressBar.style.width = `${(foundCount / 4) * 100}%`;

                // If all spotted
                if (foundCount === 4) {
                    if (simCompleteMessage) simCompleteMessage.style.display = "block";
                    if (btnReportEmail) {
                        btnReportEmail.disabled = false;
                        btnReportEmail.classList.remove("btn-secondary");
                        btnReportEmail.classList.add("btn-success");
                    }
                    showToast("All phishing red flags detected!");
                } else {
                    showToast(`Spotted Flag ${foundCount}/4`);
                }
            }
        });
    });

    if (btnReportEmail) {
        btnReportEmail.addEventListener("click", () => {
            recordSimulationCompletion(4);
            showToast("Report submitted successfully.");
            setTimeout(() => {
                window.location.href = "results.html";
            }, 1000);
        });
    }
}

// ==========================================================================
// G. RESULTS & CERTIFICATE RENDER (results.html)
// ==========================================================================
function initResultsPage() {
    const totalScorePercent = document.getElementById("totalScorePercent");
    if (!totalScorePercent) return; // Not on results page

    const state = getAppState();

    // 1. Fill Table rows & Score calculations
    const modules = ['module1', 'module2', 'module3'];
    let passedAllQuizzes = true;
    let completedModulesCount = 0;
    let quizPointsSum = 0;

    modules.forEach(m => {
        const statusEl = document.getElementById(`scoreMod${m.charAt(m.length-1)}Status`);
        const scoreValEl = document.getElementById(`scoreMod${m.charAt(m.length-1)}Val`);
        const score = state.scores[m];

        if (statusEl && scoreValEl) {
            statusEl.className = "module-badge";
            
            if (state.progress[m] === "completed") {
                statusEl.classList.add("badge-completed");
                statusEl.textContent = "Completed";
                scoreValEl.textContent = `${score}%`;
                
                // Track grades
                completedModulesCount++;
                quizPointsSum += (score / 100) * 5; // Convert percentage back to 5 points format
                
                if (score < 80) passedAllQuizzes = false;
            } else {
                statusEl.classList.add("badge-locked");
                statusEl.textContent = "Incomplete";
                scoreValEl.textContent = "--";
                passedAllQuizzes = false;
            }
        }
    });

    // Simulation Drill row sync
    const scoreSimStatus = document.getElementById("scoreSimStatus");
    const scoreSimVal = document.getElementById("scoreSimVal");
    if (scoreSimStatus && scoreSimVal) {
        scoreSimStatus.className = "module-badge";
        if (state.scores.sim !== null) {
            scoreSimStatus.classList.add("badge-completed");
            scoreSimStatus.textContent = "Completed";
            scoreSimVal.textContent = `${state.scores.sim}%`;
        } else {
            scoreSimStatus.classList.add("badge-locked");
            scoreSimStatus.textContent = "Not Run";
            scoreSimVal.textContent = "--";
        }
    }

    // 2. Score calculations
    // Overall score averages
    const totalPointsEarned = quizPointsSum; 
    const overallScorePercent = Math.round((totalPointsEarned / 15) * 100) || 0;
    
    totalScorePercent.textContent = `${overallScorePercent}%`;

    const gradingBadge = document.getElementById("gradingBadge");
    const statCorrectAnswers = document.getElementById("statCorrectAnswers");
    const statSimulationFlags = document.getElementById("statSimulationFlags");

    if (statCorrectAnswers) {
        statCorrectAnswers.textContent = `${Math.round(totalPointsEarned)} / 15`;
    }
    if (statSimulationFlags) {
        statSimulationFlags.textContent = state.scores.sim !== null ? "4 / 4" : "0 / 4";
    }

    // Determine Certificate Eligibility
    // Must complete all modules and pass them all with >= 80% (which means they passed everything)
    const certificateContainer = document.getElementById("certificateContainer");
    const warningPanel = document.getElementById("certificateLockedWarning");
    const btnPrintCert = document.getElementById("btnPrintCert");
    const remediationLinks = document.getElementById("remediationLinks");

    if (completedModulesCount === 3 && passedAllQuizzes) {
        // Certified!
        if (gradingBadge) {
            gradingBadge.textContent = "Certified";
            gradingBadge.style.color = "var(--success)";
        }
        if (certificateContainer) certificateContainer.style.display = "flex";
        if (warningPanel) warningPanel.style.display = "none";
        if (btnPrintCert) btnPrintCert.disabled = false;

        // Fill Certificate details
        const certName = document.getElementById("certEmployeeName");
        const certDateVal = document.getElementById("certDateVal");
        if (certName) certName.textContent = state.employeeName || "Security Specialist";
        if (certDateVal) certDateVal.textContent = getFormattedDate();
    } else {
        // Retake/Pending
        if (gradingBadge) {
            gradingBadge.textContent = completedModulesCount < 3 ? "Incomplete" : "Audit Failed";
            gradingBadge.style.color = "var(--danger)";
        }
        if (certificateContainer) certificateContainer.style.display = "none";
        if (warningPanel) {
            warningPanel.style.display = "block";
            
            // Custom Remediation advice text
            const adviceMsg = document.getElementById("certLockMessage");
            if (completedModulesCount < 3) {
                adviceMsg.textContent = "You must complete all three modules and perform the phishing simulation drill before receiving your certificate.";
            } else {
                adviceMsg.textContent = "Your overall score met passing criteria, but corporate compliance requires a minimum of 80% (4/5) on every module quiz. Please review the failed sections below.";
            }

            // Create remediation navigation prompts
            if (remediationLinks) {
                remediationLinks.innerHTML = "";
                const moduleTitles = {
                    module1: "Module 1: Phishing Awareness",
                    module2: "Module 2: Password Hygiene",
                    module3: "Module 3: Social Engineering"
                };

                modules.forEach(m => {
                    if (state.progress[m] !== "completed" || state.scores[m] < 80) {
                        const linkEl = document.createElement("a");
                        linkEl.href = `${m}.html`;
                        linkEl.className = "btn btn-secondary";
                        linkEl.style.marginRight = "1rem";
                        linkEl.style.marginBottom = "0.5rem";
                        linkEl.textContent = `Retake ${moduleTitles[m].split(":")[1]}`;
                        remediationLinks.appendChild(linkEl);
                    }
                });

                if (state.scores.sim === null) {
                    const simLink = document.createElement("a");
                    simLink.href = "simulations.html";
                    simLink.className = "btn btn-primary";
                    simLink.style.marginBottom = "0.5rem";
                    simLink.textContent = "Run Phishing Simulation";
                    remediationLinks.appendChild(simLink);
                }
            }
        }
        if (btnPrintCert) btnPrintCert.disabled = true;
    }

    // 3. Action Buttons Listeners
    if (btnPrintCert) {
        btnPrintCert.addEventListener("click", () => {
            window.print();
        });
    }

    const btnShareResults = document.getElementById("btnShareResults");
    if (btnShareResults) {
        btnShareResults.addEventListener("click", () => {
            const shareString = `CyberShield Security Portal: ${state.employeeName || "Employee"} completed the awareness training program with an average quiz grade of ${overallScorePercent}%!`;
            
            navigator.clipboard.writeText(shareString)
                .then(() => {
                    showToast("Summary copied to clipboard!");
                })
                .catch(err => {
                    console.error("Clipboard copy failed", err);
                    alert(shareString);
                });
        });
    }
}

// ==========================================================================
// Initialization Triggers
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initDashboard();
    initModuleTabs();
    initModule1Checklist();
    initPasswordStrengthChecker();
    initScenarioSimulator();
    initQuizEngine();
    initSimulationDrill();
    initResultsPage();
});
