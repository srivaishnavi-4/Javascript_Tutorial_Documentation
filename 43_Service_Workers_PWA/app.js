// ========================================
// SERVICE WORKER REGISTRATION
// ========================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("/sw.js")

            .then(() => {

                console.log(
                    "Service Worker registered successfully"
                );

            })

            .catch(error => {

                console.error(
                    "Service Worker registration failed:",
                    error
                );

            });

    });

}


// ========================================
// DOM ELEMENTS
// ========================================

const taskInput =
    document.getElementById("taskInput");

const addTaskBtn =
    document.getElementById("addTaskBtn");

const taskList =
    document.getElementById("taskList");

const status =
    document.getElementById("status");

const offlineMessage =
    document.getElementById("offlineMessage");

const installBtn =
    document.getElementById("installBtn");


// ========================================
// PWA INSTALLATION
// ========================================

// Stores the browser's installation prompt

let installPrompt = null;


window.addEventListener(
    "beforeinstallprompt",
    event => {

        // Prevent browser from showing
        // the default installation prompt

        event.preventDefault();

        // Save the event

        installPrompt = event;

        // Show our custom button

        installBtn.style.display = "block";

    }
);


// ========================================
// INSTALL BUTTON
// ========================================

installBtn.addEventListener(
    "click",
    async () => {

        if (!installPrompt) {
            return;
        }

        // Show installation prompt

        installPrompt.prompt();

        // Wait for user decision

        const result =
            await installPrompt.userChoice;

        console.log(
            "Installation result:",
            result.outcome
        );

        // Clear prompt

        installPrompt = null;

        // Hide button

        installBtn.style.display = "none";

    }
);


// ========================================
// CONNECTION STATUS
// ========================================

function updateConnectionStatus() {

    if (navigator.onLine) {

        status.textContent = "Online";

        offlineMessage.style.display = "none";

    } else {

        status.textContent = "Offline";

        offlineMessage.style.display = "block";

    }

}


// Detect when internet comes back

window.addEventListener(
    "online",
    () => {

        updateConnectionStatus();

        synchronizeTasks();

    }
);


// Detect when internet is lost

window.addEventListener(
    "offline",
    () => {

        updateConnectionStatus();

    }
);


// Initial status

updateConnectionStatus();


// ========================================
// GET TASKS FROM LOCAL STORAGE
// ========================================

function getTasks() {

    const tasks =
        localStorage.getItem("tasks");

    return tasks
        ? JSON.parse(tasks)
        : [];

}


// ========================================
// SAVE TASKS
// ========================================

function saveTasks(tasks) {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}


// ========================================
// ADD TASK
// ========================================

function addTask() {

    const taskName =
        taskInput.value.trim();


    // Prevent empty tasks

    if (taskName === "") {

        alert("Please enter a task");

        return;

    }


    const tasks = getTasks();


    // Create task object

    const task = {

        id: Date.now(),

        title: taskName,

        completed: false,

        synced: navigator.onLine,

        createdAt: new Date().toISOString()

    };


    // Add task

    tasks.push(task);


    // Save locally

    saveTasks(tasks);


    // Clear input

    taskInput.value = "";


    // Refresh UI

    displayTasks();


    console.log(
        "Task added:",
        task
    );

}


// ========================================
// ADD TASK BUTTON
// ========================================

addTaskBtn.addEventListener(
    "click",
    addTask
);


// ========================================
// ENTER KEY
// ========================================

taskInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            addTask();

        }

    }
);


// ========================================
// DISPLAY TASKS
// ========================================

function displayTasks() {

    const tasks = getTasks();


    taskList.innerHTML = "";


    if (tasks.length === 0) {

        taskList.innerHTML =
            "<p>No tasks available.</p>";

        return;

    }


    tasks.forEach(task => {

        const taskElement =
            document.createElement("div");

        taskElement.className = "task";


        taskElement.innerHTML = `

            <div class="task-info">

                <span class="task-title">
                    ${task.title}
                </span>

                <span class="task-status">

                    ${
                        task.synced
                            ? " Synced"
                            : " Waiting for sync"
                    }

                </span>

            </div>


            <button
                class="delete-btn"
                onclick="deleteTask(${task.id})"
            >
                Delete
            </button>

        `;


        taskList.appendChild(taskElement);

    });

}


// ========================================
// DELETE TASK
// ========================================

function deleteTask(id) {

    let tasks = getTasks();


    tasks = tasks.filter(
        task => task.id !== id
    );


    saveTasks(tasks);


    displayTasks();

}


// ========================================
// SYNCHRONIZE TASKS
// ========================================

function synchronizeTasks() {

    if (!navigator.onLine) {
        return;
    }


    const tasks = getTasks();


    let hasChanges = false;


    tasks.forEach(task => {

        if (!task.synced) {

            console.log(
                "Synchronizing task:",
                task.title
            );


            /*
             * In a real application:
             *
             * fetch("/api/tasks", {
             *     method: "POST",
             *     body: JSON.stringify(task)
             * });
             *
             * Here we simulate synchronization.
             */

            task.synced = true;

            hasChanges = true;

        }

    });


    if (hasChanges) {

        saveTasks(tasks);

        displayTasks();

        console.log(
            "Pending tasks synchronized"
        );

    }

}


// ========================================
// INITIAL DISPLAY
// ========================================

displayTasks();