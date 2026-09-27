const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const errorMessage = document.getElementById("errorMessage");
const submitBtn = document.getElementById("submitBtn");

let todos = [];
let editTodoId = null;


// Load saved todos when the application starts
loadTodos();


// CREATE / UPDATE
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
        const title = todoInput.value.trim();

        if (title === "") {
            throw new Error("Please enter a todo");
        }

        if (editTodoId !== null) {
            updateTodo(editTodoId, title);
        } else {
            createTodo(title);
        }

        resetForm();
        displayTodos();

    } catch (error) {
        showError(error.message);
    }
});


// CREATE
function createTodo(title) {

    const todo = {
        id: Date.now(),
        title: title,
        completed: false,
        createdAt: new Date().toLocaleString()
    };

    todos.push(todo);

    saveTodos();
}


// READ
function displayTodos() {

    todoList.innerHTML = "";

    if (todos.length === 0) {

        const emptyMessage = document.createElement("p");

        emptyMessage.textContent = "No todos available.";

        todoList.appendChild(emptyMessage);

        return;
    }

    todos.forEach(function (todo) {

        const listItem = document.createElement("li");

        const todoInfo = document.createElement("div");
        todoInfo.className = "todo-info";

        const title = document.createElement("span");
        title.className = "todo-title";

        if (todo.completed) {
            title.classList.add("completed");
        }

        title.textContent = todo.title;

        const date = document.createElement("span");
        date.className = "todo-date";
        date.textContent = `Created: ${todo.createdAt}`;

        todoInfo.appendChild(title);
        todoInfo.appendChild(date);


        const actions = document.createElement("div");
        actions.className = "todo-actions";


        const completeButton = document.createElement("button");

        completeButton.className = "complete-btn";

        completeButton.textContent =
            todo.completed ? "Undo" : "Complete";

        completeButton.addEventListener("click", function () {
            toggleTodo(todo.id);
        });


        const editButton = document.createElement("button");

        editButton.className = "edit-btn";
        editButton.textContent = "Edit";

        editButton.addEventListener("click", function () {
            editTodo(todo.id);
        });


        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            deleteTodo(todo.id);
        });


        actions.appendChild(completeButton);
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);

        listItem.appendChild(todoInfo);
        listItem.appendChild(actions);

        todoList.appendChild(listItem);
    });
}


// UPDATE
function updateTodo(id, newTitle) {

    const todo = todos.find(function (todo) {
        return todo.id === id;
    });

    if (!todo) {
        throw new Error("Todo not found");
    }

    todo.title = newTitle;

    saveTodos();
}


// EDIT
function editTodo(id) {

    try {

        const todo = todos.find(function (todo) {
            return todo.id === id;
        });

        if (!todo) {
            throw new Error("Todo not found");
        }

        todoInput.value = todo.title;

        editTodoId = id;

        submitBtn.textContent = "Update Todo";

        todoInput.focus();

    } catch (error) {
        showError(error.message);
    }
}


// DELETE
function deleteTodo(id) {

    try {

        const todoExists = todos.some(function (todo) {
            return todo.id === id;
        });

        if (!todoExists) {
            throw new Error("Todo not found");
        }

        const confirmed = confirm("Are you sure you want to delete this todo?");

        if (!confirmed) {
            return;
        }

        todos = todos.filter(function (todo) {
            return todo.id !== id;
        });

        saveTodos();
        displayTodos();

    } catch (error) {
        showError(error.message);
    }
}


// COMPLETE / UNDO
function toggleTodo(id) {

    try {

        const todo = todos.find(function (todo) {
            return todo.id === id;
        });

        if (!todo) {
            throw new Error("Todo not found");
        }

        todo.completed = !todo.completed;

        saveTodos();
        displayTodos();

    } catch (error) {
        showError(error.message);
    }
}


// SAVE DATA
function saveTodos() {

    try {

        const jsonData = JSON.stringify(todos);

        localStorage.setItem("todos", jsonData);

    } catch (error) {

        showError("Unable to save todos");
    }
}


// LOAD DATA
function loadTodos() {

    try {

        const storedData = localStorage.getItem("todos");

        if (storedData) {
            todos = JSON.parse(storedData);
        }

        displayTodos();

    } catch (error) {

        todos = [];

        showError("Unable to load saved todos");
    }
}


// RESET FORM
function resetForm() {

    todoInput.value = "";

    editTodoId = null;

    submitBtn.textContent = "Add Todo";
}


// ERROR HANDLING
function showError(message) {

    errorMessage.textContent = message;

    errorMessage.className = "error";

    setTimeout(function () {
        errorMessage.textContent = "";
    }, 3000);
}
