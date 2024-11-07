let dailyLogs = [];
let subjectProgress = {
    physics: 0,
    chemistry: 0,
    biology: 0,
    english: 0,
    maths: 0,
    pe: 0
};
let growthLogs = [];

function logEntry() {
    const date = document.getElementById('date').value;
    const task = document.getElementById('task').value;
    if (date && task) {
        dailyLogs.push({ date, task });
        updateLogList();
    }
}

function updateLogList() {
    const logList = document.getElementById('log-list');
    logList.innerHTML = "";
    dailyLogs.forEach(log => {
        const li = document.createElement('li');
        li.textContent = `${log.date}: ${log.task}`;
        logList.appendChild(li);
    });
}

function updateProgress(subject) {
    const progressInput = document.getElementById(`${subject}-progress`);
    const progress = parseInt(progressInput.value);
    if (progress >= 0 && progress <= 100) {
        subjectProgress[subject] = progress;
        alert(`${subject.charAt(0).toUpperCase() + subject.slice(1)} progress updated to ${progress}%`);
    }
}

function saveGrowthLog() {
    const growthLog = document.getElementById('growth-log').value;
    if (growthLog) {
        growthLogs.push(growthLog);
        updateGrowthList();
    }
}

function updateGrowthList() {
    const growthList = document.getElementById('growth-list');
    growthList.innerHTML = "";
    growthLogs.forEach(log => {
        const li = document.createElement('li');
        li.textContent = log;
        growthList.appendChild(li);
    });
}
