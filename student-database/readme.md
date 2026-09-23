# Student Database Management System

A simple Student Database Management System POC built using **HTML, CSS, and JavaScript**.

The application contains three main pages:

* **Student Registration** – Add student details
* **Staff Dashboard** – Search, filter, and edit students
* **Principal Dashboard** – View students and department statistics

Student data is temporarily stored using **Browser LocalStorage**.

---

## JavaScript Concepts Used

### 1. Variables — `const` and `let`

Used to store form elements, student data, and arrays.

```javascript
const studentForm =
    document.getElementById("studentForm");

let students = [];
```

* `const` is used when the variable should not be reassigned.
* `let` is used when the value may change.

---

### 2. Objects

Each student is stored as a JavaScript object.

```javascript
const student = {
    id: Number(
        document.getElementById("studentId").value
    ),
    name:
        document.getElementById("name").value.trim(),
    department:
        document.getElementById("department").value,
    year:
        document.getElementById("year").value,
    section:
        document.getElementById("section").value
};
```

An object stores student information as **key-value pairs**.

---

### 3. Arrays

Multiple student objects are stored inside an array.

```javascript
let students = [];
```

Example:

```javascript
[
    {
        id: 101,
        name: "Vaishu",
        department: "CSE"
    },
    {
        id: 102,
        name: "Priya",
        department: "IT"
    }
]
```

---

### 4. Functions

Functions are used to organize reusable functionality.

```javascript
function displayStudents(data) {
    table.innerHTML = "";

    data.forEach(function(student) {
        // Display student
    });
}
```

Functions used in the project include:

* `displayStudents()`
* `filterStudents()`
* `editStudent()`

---

### 5. Arrow Functions

An arrow function is used with `findIndex()`.

```javascript
const index =
    students.findIndex(
        student => student.id === id
    );
```

It provides a shorter syntax for functions.

---

### 6. DOM Manipulation

JavaScript is used to access and modify HTML elements.

#### `getElementById()`

```javascript
const table =
    document.getElementById("studentTable");
```

Gets an HTML element using its ID.

#### `.value`

```javascript
const name =
    document.getElementById("name").value;
```

Gets the value entered by the user.

#### `.textContent`

```javascript
message.textContent =
    "Student details added successfully!";
```

Changes the text displayed on the page.

---

### 7. Event Handling

`addEventListener()` is used to respond to user actions.

#### Form Submit

```javascript
studentForm.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        // Registration logic
    }
);
```

#### Search

```javascript
search.addEventListener(
    "input",
    filterStudents
);
```

#### Filter

```javascript
departmentFilter.addEventListener(
    "change",
    filterStudents
);
```

Events used:

* `submit`
* `input`
* `change`

---

### 8. `preventDefault()`

Prevents the browser's default form submission behavior.

```javascript
event.preventDefault();
```

This prevents the page from reloading when the registration form is submitted.

---

### 9. Array `push()`

Used to add a new student to the students array.

```javascript
students.push(student);
```

---

### 10. Array `forEach()`

Used to perform an action for every student.

```javascript
students.forEach(function(student) {

    const row =
        document.createElement("tr");

    row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.department}</td>
    `;

    table.appendChild(row);
});
```

In this project, `forEach()` is mainly used to create and display table rows.

---

### 11. Array `filter()`

Used for searching and filtering students.

```javascript
const filteredStudents =
    students.filter(function(student) {

        const nameMatch =
            student.name
                .toLowerCase()
                .includes(searchValue);

        const departmentMatch =
            department === "" ||
            student.department === department;

        const yearMatch =
            year === "" ||
            student.year === year;

        return (
            nameMatch &&
            departmentMatch &&
            yearMatch
        );
    });
```

Used for:

* Student name search
* Department filtering
* Year filtering

---

### 12. Array `findIndex()`

Used to find the position of a student before editing.

```javascript
const index =
    students.findIndex(
        student => student.id === id
    );
```

If the student is found, the index is used to update the student.

---

### 13. Array `reduce()`

Used in the Principal Dashboard to calculate department counts.

```javascript
const cseCount =
    students.reduce(
        function(total, student) {

            return student.department === "CSE"
                ? total + 1
                : total;

        },
        0
    );
```

Used to calculate:

* CSE students
* IT students
* ECE students
* MECH students
* EEE students

---

### 14. `length`

Used to find the total number of students.

```javascript
totalStudents.textContent =
    students.length;
```

If the array contains 10 students:

```javascript
students.length
// 10
```

---

### 15. String Methods

#### `trim()`

Removes unnecessary spaces.

```javascript
student.name.trim();
```

#### `toLowerCase()`

Converts text to lowercase for case-insensitive searching.

```javascript
student.name.toLowerCase();
```

#### `includes()`

Checks whether a string contains another string.

```javascript
student.name
    .toLowerCase()
    .includes(searchValue);
```

---

### 16. Type Conversion — `Number()`

HTML input values are received as strings.

```javascript
Number(
    document.getElementById("studentId").value
);
```

Converts:

```text
"101"
```

into:

```text
101
```

---

### 17. `isNaN()`

Used to check whether the Student ID is a valid number.

```javascript
if (isNaN(student.id) || student.id <= 0) {
    throw new Error(
        "Student ID must be a valid number."
    );
}
```

---

### 18. Ternary Operator

Used inside `reduce()` to conditionally count students.

```javascript
return student.department === "CSE"
    ? total + 1
    : total;
```

Syntax:

```javascript
condition
    ? valueIfTrue
    : valueIfFalse;
```

---

### 19. Template Literals

Used to dynamically create HTML.

```javascript
row.innerHTML = `
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.department}</td>
`;
```

Template literals use backticks and `${}` for inserting values.

---

### 20. Dynamic DOM Creation

Used to create table rows dynamically.

```javascript
const row =
    document.createElement("tr");

row.innerHTML = `
    <td>${student.id}</td>
    <td>${student.name}</td>
`;

table.appendChild(row);
```

Methods used:

* `createElement()`
* `appendChild()`
* `innerHTML`

---

### 21. LocalStorage

LocalStorage is used as temporary browser storage instead of a backend database.

#### Store Data

```javascript
localStorage.setItem(
    "students",
    JSON.stringify(students)
);
```

#### Retrieve Data

```javascript
students =
    JSON.parse(
        localStorage.getItem("students")
    ) || [];
```

---

### 22. JSON

LocalStorage stores data as strings, so JSON conversion is required.

#### `JSON.stringify()`

Converts a JavaScript array/object into a string.

```javascript
JSON.stringify(students);
```

#### `JSON.parse()`

Converts the stored string back into a JavaScript array/object.

```javascript
JSON.parse(
    localStorage.getItem("students")
);
```

Data flow:

```text
JavaScript Array
      ↓
JSON.stringify()
      ↓
String
      ↓
LocalStorage
      ↓
JSON.parse()
      ↓
JavaScript Array
```

---

### 23. Form Validation

HTML `required` attributes and JavaScript validation are used.

```javascript
if (!studentForm.checkValidity()) {
    studentForm.reportValidity();
    return;
}
```

This prevents incomplete student data from being stored.

---

### 24. `form.reset()`

Clears the registration form after successful submission.

```javascript
studentForm.reset();
```

---

### 25. `prompt()`

Used to get a new student name while editing.

```javascript
const newName =
    prompt(
        "Enter student name:",
        student.name
    );
```

If the user clicks Cancel, `prompt()` returns `null`.

```javascript
if (
    newName !== null &&
    newName.trim() !== ""
) {
    students[index].name =
        newName.trim();
}
```

---

### 26. Error Handling

The project uses `try...catch` to handle unexpected errors.

```javascript
try {
    students =
        JSON.parse(
            localStorage.getItem("students")
        ) || [];
} catch (error) {

    console.error(
        "Error reading LocalStorage:",
        error
    );

    students = [];
}
```

Other error-handling concepts used:

* `try`
* `catch`
* `throw new Error()`
* `console.error()`
* `alert()`

Example:

```javascript
if (!studentForm) {
    throw new Error(
        "Student form not found."
    );
}
```

---

### 27. Conditional Statements

Used to make decisions in the application.

```javascript
if (students.length === 0) {

    table.innerHTML = `
        <tr>
            <td colspan="6">
                No students registered.
            </td>
        </tr>
    `;

}
```

Used for:

* Validation
* Checking students
* Filtering
* Error handling
* Editing

---

### 28. Logical Operators

#### AND `&&`

```javascript
nameMatch &&
departmentMatch &&
yearMatch
```

All conditions must be true.

#### OR `||`

```javascript
JSON.parse(
    localStorage.getItem("students")
) || [];
```

Uses an empty array if no student data exists.

#### NOT `!`

```javascript
if (!table) {
    // Table does not exist
}
```

---

## JavaScript Data Flow

The complete application follows this flow:

```text
Student Registration
        ↓
Get form values
        ↓
Create Student Object
        ↓
students.push(student)
        ↓
JSON.stringify()
        ↓
LocalStorage
```

Staff Dashboard:

```text
LocalStorage
      ↓
JSON.parse()
      ↓
students array
      ↓
filter()
      ↓
Search / Filter
      ↓
forEach()
      ↓
Display Table
      ↓
findIndex()
      ↓
Edit Student
```

Principal Dashboard:

```text
LocalStorage
      ↓
JSON.parse()
      ↓
students array
      ↓
length()
      ↓
Total Students
      ↓
reduce()
      ↓
Department Counts
      ↓
forEach()
      ↓
Display Students
```

---

## Main JavaScript Topics Covered

The project covers these important JavaScript topics:

* Variables (`let`, `const`)
* Data Types
* Objects
* Arrays
* Array of Objects
* Functions
* Arrow Functions
* Conditional Statements
* Logical Operators
* Comparison Operators
* DOM Manipulation
* Event Handling
* Form Validation
* String Methods
* Array Methods

  * `push()`
  * `forEach()`
  * `filter()`
  * `findIndex()`
  * `reduce()`
* Template Literals
* Type Conversion
* JSON
* LocalStorage
* Dynamic HTML Creation
* Error Handling
* Browser APIs
* Basic CRUD Concepts


