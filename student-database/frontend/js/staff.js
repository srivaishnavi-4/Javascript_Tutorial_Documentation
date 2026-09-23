console.log("Staff JS loaded");

try {

    /*
    Get students from LocalStorage.

    JSON.parse()
    converts the stored JSON string
    back into a JavaScript array.
    */

    let students = [];

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


    // Get HTML elements using their IDs
    const table =
        document.getElementById("studentTable");

    const search =
        document.getElementById("search");

    const departmentFilter =
        document.getElementById("departmentFilter");

    const yearFilter =
        document.getElementById("yearFilter");


    // Check whether required elements exist
    if (!table) {
        throw new Error("Student table not found.");
    }

    if (!search) {
        throw new Error("Search input not found.");
    }

    if (!departmentFilter) {
        throw new Error(
            "Department filter not found."
        );
    }

    if (!yearFilter) {
        throw new Error(
            "Year filter not found."
        );
    }


    // Function declaration
    function displayStudents(data) {

        try {

            // Clear previous table rows
            table.innerHTML = "";


            // If there are no students
            if (data.length === 0) {

                table.innerHTML = `
                    <tr>
                        <td colspan="7">
                            No students found.
                        </td>
                    </tr>
                `;

                return;
            }


            /*
            forEach()

            Used here because we want to
            perform an action for every student.

            We are creating and adding table rows.
            We are NOT creating a new array.
            */

            data.forEach(function(student) {

                // createElement()
                // creates a new <tr> element
                const row =
                    document.createElement("tr");


                /*
                Template literal

                Backticks allow us to write
                HTML and insert JavaScript values
                using ${}.
                */

                row.innerHTML = `

                    <td>${student.id}</td>

                    <td>${student.name}</td>

                    <td>${student.department}</td>

                    <td>${student.year}</td>

                    <td>${student.section}</td>

                    <td>${student.staff}</td>

                    <td>
                        <button
                            onclick="editStudent(${student.id})"
                            class="edit-btn">
                            Edit
                        </button>
                    </td>

                `;


                // appendChild()
                // adds the created row to the table
                table.appendChild(row);

            });


        } catch (error) {

            console.error(
                "Error displaying students:",
                error
            );
        }
    }


    // Function used for searching and filtering
    function filterStudents() {

        try {

            /*
            .value gets the value entered
            in the search input.

            .toLowerCase() makes the search
            case-insensitive.

            .trim() removes unnecessary spaces.
            */

            const searchValue =
                search.value
                    .toLowerCase()
                    .trim();


            // Get selected department
            const department =
                departmentFilter.value;


            // Get selected year
            const year =
                yearFilter.value;


            /*
            filter()

            Creates a NEW array containing
            only students that satisfy
            our conditions.
            */

            const filteredStudents =
                students.filter(function(student) {


                    /*
                    includes()

                    Checks whether the student's name
                    contains the searched text.
                    */

                    const nameMatch =
                        student.name
                            .toLowerCase()
                            .includes(searchValue);


                    // Department filter
                    const departmentMatch =
                        department === "" ||
                        student.department === department;


                    // Year filter
                    const yearMatch =
                        year === "" ||
                        student.year === year;


                    /*
                    Student will be displayed only when
                    all three conditions are true.
                    */

                    return (
                        nameMatch &&
                        departmentMatch &&
                        yearMatch
                    );

                });


            // Display filtered students
            displayStudents(filteredStudents);


        } catch (error) {

            console.error(
                "Error filtering students:",
                error
            );
        }
    }


    /*
    Event listener

    "input" runs whenever the user
    types in the search box.
    */

    search.addEventListener(
        "input",
        filterStudents
    );


    /*
    "change" runs when the department
    selection changes.
    */

    departmentFilter.addEventListener(
        "change",
        filterStudents
    );


    /*
    "change" runs when the year
    selection changes.
    */

    yearFilter.addEventListener(
        "change",
        filterStudents
    );


    // Function declaration for editing
    function editStudent(id) {

        try {

            /*
            findIndex()

            Finds the position of the student
            whose ID matches the given ID.
            */

            const index =
                students.findIndex(

                    /*
                    Arrow function

                    Checks whether the student's
                    ID matches the given ID.
                    */

                    student => student.id === id
                );


            // -1 means student was not found
            if (index === -1) {

                alert("Student not found.");

                return;
            }


            // Get the student using the array index
            const student =
                students[index];


            /*
            prompt()

            Displays a browser dialog and
            gets a value from the user.
            */

            const newName =
                prompt(
                    "Enter student name:",
                    student.name
                );


            /*
            If Cancel is clicked,
            prompt() returns null.

            trim() removes spaces.
            */

            if (
                newName !== null &&
                newName.trim() !== ""
            ) {

                // Update student name
                students[index].name =
                    newName.trim();


                /*
                JSON.stringify()

                Converts the JavaScript array
                into a JSON string before storing.
                */

                localStorage.setItem(
                    "students",
                    JSON.stringify(students)
                );


                // Display updated students
                displayStudents(students);


                alert(
                    "Student updated successfully!"
                );
            }


        } catch (error) {

            console.error(
                "Error editing student:",
                error
            );

            alert(
                "Unable to edit student."
            );
        }
    }


    /*
    Make the function available to the
    onclick attribute in the HTML.
    */

    window.editStudent = editStudent;


    // Display all students when page loads
    displayStudents(students);


} catch (error) {

    console.error(
        "Staff page error:",
        error
    );

    alert(
        "Unable to load Staff Dashboard."
    );
}