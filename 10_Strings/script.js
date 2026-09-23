const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const departmentInput =
    document.getElementById("department");

const skillsInput =
    document.getElementById("skills");

const searchInput =
    document.getElementById("search");

const analyzeBtn =
    document.getElementById("analyzeBtn");

const searchBtn =
    document.getElementById("searchBtn");

const result =
    document.getElementById("result");


// ==========================================
// Student data
// ==========================================

const students = [];


// ==========================================
// Analyze student
// ==========================================

analyzeBtn.addEventListener(
    "click",
    analyzeStudent
);


function analyzeStudent() {

    // ======================================
    // 1. Get input
    // ======================================

    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const department =
        departmentInput.value.trim();

    const skillsInputValue =
        skillsInput.value.trim();


    // ======================================
    // 2. Validate input
    // ======================================

    if (
        name === "" ||
        email === "" ||
        department === ""
    ) {
        alert("Please enter all details");
        return;
    }


    // ======================================
    // 3. Standardize text
    // ======================================

    const standardName =
        name.toUpperCase();

    const standardDepartment =
        department.toUpperCase();

    const normalizedEmail =
        email.toLowerCase();


    // ======================================
    // 4. Check email
    // ======================================

    const hasAtSymbol =
        email.includes("@");

    const hasDot =
        email.includes(".");

    const emailDomain =
        email.substring(
            email.lastIndexOf("@") + 1
        );


    // ======================================
    // 5. Check email domain
    // ======================================

    const isGmail =
        email.toLowerCase().endsWith(
            "@gmail.com"
        );


    // ======================================
    // 6. Get first character
    // ======================================

    const firstCharacter =
        name.charAt(0);

    const firstCharacterUsingIndex =
        name[0];


    // ======================================
    // 7. Get name length
    // ======================================

    const nameLength =
        name.length;


    // ======================================
    // 8. Extract name portion
    // ======================================

    const shortName =
        name.slice(0, 5);

    const firstThree =
        name.substring(0, 3);


    // ======================================
    // 9. Process skills
    // ======================================

    const skills =
        skillsInputValue
            .split(",")
            .map(skill => skill.trim());


    const formattedSkills =
        skills.join(" | ");


    // ======================================
    // 10. Search inside skills
    // ======================================

    const skillText =
        skillsInputValue.toLowerCase();

    const knowsJavaScript =
        skillText.includes("javascript");

    const knowsPython =
        skillText.includes("python");


    // ======================================
    // 11. Replace text
    // ======================================

    const cleanedDepartment =
        department.replaceAll(" ", "");


    // Replace first occurrence
    const correctedName =
        name.replace(
            name.charAt(0),
            name.charAt(0).toUpperCase()
        );


    // ======================================
    // 12. Search using search()
    // ======================================

    const emailPosition =
        email.search("@");


    // ======================================
    // 13. Match()
    // ======================================

    const emailNumbers =
        email.match(/\d+/g);


    // ======================================
    // 14. Student ID
    // ======================================

    const studentNumber =
        String(students.length + 1)
            .padStart(4, "0");

    const studentId =
        "STU".concat("-", studentNumber);


    // ======================================
    // 15. Add student
    // ======================================

    const student = {

        id: studentId,

        name: correctedName,

        email: normalizedEmail,

        department: standardDepartment,

        skills: skills

    };


    students.push(student);


    // ======================================
    // 16. Format display
    // ======================================

    const separator =
        "-".repeat(40);


    const report = `

${separator}

STUDENT PROFILE

${separator}

Student ID:
${student.id}

Name:
${student.name}

Email:
${student.email}

Department:
${student.department}

Skills:
${formattedSkills}

${separator}

STRING ANALYSIS

${separator}

Name Length:
${nameLength}

First Character:
${firstCharacter}

First Character using []:
${firstCharacterUsingIndex}

First 5 Characters:
${shortName}

First 3 Characters:
${firstThree}

Email Contains @:
${hasAtSymbol}

Email Contains Dot:
${hasDot}

Email Position:
${emailPosition}

Email Domain:
${emailDomain}

Gmail Account:
${isGmail}

Knows JavaScript:
${knowsJavaScript}

Knows Python:
${knowsPython}

Email Numbers:
${emailNumbers || "None"}

Clean Department:
${cleanedDepartment}

${separator}
`;


    result.textContent = report;
}


// ==========================================
// Search students
// ==========================================

searchBtn.addEventListener(
    "click",
    searchStudents
);


function searchStudents() {

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    if (searchText === "") {
        alert("Enter something to search");
        return;
    }


    const matchingStudents =
        students.filter(student => {

            const nameMatch =
                student.name
                    .toLowerCase()
                    .includes(searchText);


            const skillMatch =
                student.skills.some(skill =>
                    skill
                        .toLowerCase()
                        .includes(searchText)
                );


            return nameMatch || skillMatch;
        });


    if (matchingStudents.length === 0) {

        result.textContent =
            "No students found.";

        return;
    }


    result.textContent =
        matchingStudents
            .map(student => {

                return `
Student ID: ${student.id}
Name: ${student.name}
Department: ${student.department}
Skills: ${student.skills.join(", ")}
`;
            })
            .join("\n----------------\n");
}