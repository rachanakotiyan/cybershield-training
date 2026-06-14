/* ==========================================================================
   CyberShield Progress & State Manager
   ========================================================================== */

// Default State Configurations
const DEFAULT_STATE = {
    employeeName: "",
    progress: {
        module1: "available", // available, completed
        module2: "locked",    // locked, available, completed
        module3: "locked"     // locked, available, completed
    },
    scores: {
        module1: null,
        module2: null,
        module3: null,
        sim: null
    },
    badges: [] // Array of earned badge IDs: "phish", "pass", "social"
};

// State Accessor Functions
function getAppState() {
    const name = localStorage.getItem("cs_employee_name");
    const progressRaw = localStorage.getItem("cs_progress");
    const scoresRaw = localStorage.getItem("cs_scores");
    const badgesRaw = localStorage.getItem("cs_badges");

    // If name exists but rest are uninitialized, set defaults
    if (!name && !progressRaw) {
        return DEFAULT_STATE;
    }

    return {
        employeeName: name || "",
        progress: progressRaw ? JSON.parse(progressRaw) : DEFAULT_STATE.progress,
        scores: scoresRaw ? JSON.parse(scoresRaw) : DEFAULT_STATE.scores,
        badges: badgesRaw ? JSON.parse(badgesRaw) : DEFAULT_STATE.badges
    };
}

function saveAppState(state) {
    if (state.employeeName) {
        localStorage.setItem("cs_employee_name", state.employeeName);
    } else {
        localStorage.removeItem("cs_employee_name");
    }
    localStorage.setItem("cs_progress", JSON.stringify(state.progress));
    localStorage.setItem("cs_scores", JSON.stringify(state.scores));
    localStorage.setItem("cs_badges", JSON.stringify(state.badges));
}

function resetAppState() {
    localStorage.removeItem("cs_employee_name");
    localStorage.removeItem("cs_progress");
    localStorage.removeItem("cs_scores");
    localStorage.removeItem("cs_badges");
}

// Module unlocks and badge progression checks
function recordQuizCompletion(moduleKey, correctCount) {
    const state = getAppState();
    // Determine total questions dynamically from quizData if available
    const totalQuestions = (typeof quizData !== 'undefined' && quizData[moduleKey]) ? quizData[moduleKey].length : 5;
    const percentScore = Math.round((correctCount / totalQuestions) * 100);
    
    // Save score
    state.scores[moduleKey] = percentScore;
    
    // Complete current module
    state.progress[moduleKey] = "completed";

    // Award badge if score is >= 80% (4 of 5 correct)
    const badgeIdMap = {
        module1: "phish",
        module2: "pass",
        module3: "social"
    };
    const badgeId = badgeIdMap[moduleKey];
    if (percentScore >= 80 && !state.badges.includes(badgeId)) {
        state.badges.push(badgeId);
    }

    // Unlock next module in sequence
    if (moduleKey === "module1" && state.progress.module2 === "locked") {
        state.progress.module2 = "available";
    } else if (moduleKey === "module2" && state.progress.module3 === "locked") {
        state.progress.module3 = "available";
    }

    saveAppState(state);
}

function recordSimulationCompletion(flagCount) {
    const state = getAppState();
    const scoreVal = Math.round((flagCount / 4) * 100);
    state.scores.sim = scoreVal;
    saveAppState(state);
}

// Security Check: Redirect user if trying to access locked modules directly
function enforceModuleLocks() {
    const state = getAppState();
    const currentPage = window.location.pathname.split("/").pop();

    // Allow anonymous access to Module 1 so users can view the content and quiz as Guest.
    // Only enforce redirect when trying to access other pages without a configured name.
    if (!state.employeeName && currentPage !== "index.html" && currentPage !== "module1.html") {
        window.location.href = "index.html";
        return;
    }

    if (currentPage === "module2.html" && state.progress.module2 === "locked") {
        alert("Access Denied: Module 2 is locked. Please complete Module 1 first.");
        window.location.href = "index.html";
    } else if (currentPage === "module3.html" && state.progress.module3 === "locked") {
        alert("Access Denied: Module 3 is locked. Please complete Module 2 first.");
        window.location.href = "index.html";
    }
}

// Synchronize navbar layout
function syncNavigationAndUser() {
    const state = getAppState();
    const navUserEl = document.getElementById("navUser");
    
    if (navUserEl) {
        navUserEl.textContent = state.employeeName ? `Agent: ${state.employeeName}` : "Agent: Guest";
    }

    // Lock/Unlock links visually in nav menu
    const navMod2 = document.getElementById("navMod2");
    const navMod3 = document.getElementById("navMod3");

    if (navMod2) {
        if (state.progress.module2 === "locked") {
            navMod2.style.opacity = "0.5";
            navMod2.style.pointerEvents = "none";
            navMod2.title = "Locked - Complete Module 1 First";
        } else {
            navMod2.style.opacity = "1";
            navMod2.style.pointerEvents = "auto";
            navMod2.title = "";
        }
    }

    if (navMod3) {
        if (state.progress.module3 === "locked") {
            navMod3.style.opacity = "0.5";
            navMod3.style.pointerEvents = "none";
            navMod3.title = "Locked - Complete Module 2 First";
        } else {
            navMod3.style.opacity = "1";
            navMod3.style.pointerEvents = "auto";
            navMod3.title = "";
        }
    }
}

// Runs immediately on script load
document.addEventListener("DOMContentLoaded", () => {
    enforceModuleLocks();
    syncNavigationAndUser();
});
