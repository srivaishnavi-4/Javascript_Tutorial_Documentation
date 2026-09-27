import { StudentService } from "./studentService.js";

const service = new StudentService();

const form = document.getElementById(
    "studentForm"
) as HTMLFormElement;

const nameInput = document.getElementById(
    "name"
) as HTMLInputElement;

const departmentInput = document.getElementById(
    "department"
) as HTMLInputElement;

const studentList = document.getElementById(
    "studentList"
) as HTMLUListElement;


// Display students on the page
function renderStudents(): void {

    studentList.innerHTML = "";

    const students = service.getStudents();

    students.forEach((student) => {

        const li = document.createElement("li");

        li.textContent =
            `${student.id} - ${student.name} - ${student.department}`;

        studentList.appendChild(li);
    });
}


// Add student
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = nameInput.value.trim();
    const department = departmentInput.value.trim();

    if (!name || !department) {
        return;
    }

    service.addStudent(
        name,
        department
    );

    renderStudents();

    form.reset();
});


// Display existing students when page loads
renderStudents();