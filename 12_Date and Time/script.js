const nameInput = document.getElementById("name");
const dobInput = document.getElementById("dob");
const registerBtn = document.getElementById("registerBtn");
const result = document.getElementById("result");


registerBtn.addEventListener("click", registerStudent);


function registerStudent() {

    const name = nameInput.value.trim();
    const dobValue = dobInput.value;

    if (name === "" || dobValue === "") {
        alert("Please enter student name and date of birth");
        return;
    }


    // ==========================================
    // 1. Create DOB Date object
    // ==========================================

    const dob = new Date(dobValue);


    // ==========================================
    // 2. Get current date and time
    // ==========================================

    const registrationDate = new Date();


    // ==========================================
    // 3. Calculate student's age
    // ==========================================

    const today = new Date();

    let age =
        today.getFullYear() -
        dob.getFullYear();

    const monthDifference =
        today.getMonth() -
        dob.getMonth();

    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < dob.getDate()
        )
    ) {
        age--;
    }


    // ==========================================
    // 4. Check registration date
    // ==========================================

    const isRegisteredToday =
        registrationDate.toDateString() ===
        today.toDateString();


    // ==========================================
    // 5. Store timestamp
    // ==========================================

    const timestamp = Date.now();


    // ==========================================
    // 6. ISO timestamp
    // ==========================================

    const registeredAt =
        registrationDate.toISOString();


    // ==========================================
    // 7. User-friendly date
    // ==========================================

    const formattedDate =
        registrationDate.toLocaleDateString("en-IN");


    // ==========================================
    // 8. User-friendly time
    // ==========================================

    const formattedTime =
        registrationDate.toLocaleTimeString("en-IN");


    // ==========================================
    // 9. Store student object
    // ==========================================

    const student = {

        name: name,

        dob: dobValue,

        age: age,

        registeredAt: registeredAt,

        timestamp: timestamp

    };


    // ==========================================
    // 10. Save to localStorage
    // ==========================================

    const students =
        JSON.parse(
            localStorage.getItem("students")
        ) || [];

    students.push(student);

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );


    // ==========================================
    // 11. Display result
    // ==========================================

    result.innerHTML = `

        <h3>Student Registered Successfully</h3>

        <p>
            <strong>Name:</strong>
            ${student.name}
        </p>

        <p>
            <strong>Date of Birth:</strong>
            ${dob.toLocaleDateString("en-IN")}
        </p>

        <p>
            <strong>Age:</strong>
            ${student.age} years
        </p>

        <p>
            <strong>Registered Date:</strong>
            ${formattedDate}
        </p>

        <p>
            <strong>Registered Time:</strong>
            ${formattedTime}
        </p>

        <p>
            <strong>Registered Today:</strong>
            ${isRegisteredToday ? "Yes" : "No"}
        </p>

        <p>
            <strong>Timestamp:</strong>
            ${student.timestamp}
        </p>

        <p>
            <strong>ISO Timestamp:</strong>
            ${student.registeredAt}
        </p>
    `;
}