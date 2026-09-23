console.log("Principal JS loaded");

try {

    /*
    Get students from LocalStorage.

    JSON.parse()
    converts the JSON string back
    into a JavaScript array/object.
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


    // Get dashboard elements
    const totalStudents =
        document.getElementById("totalStudents");

    const cseStudents =
        document.getElementById("cseStudents");

    const itStudents =
        document.getElementById("itStudents");

    const eceStudents =
        document.getElementById("eceStudents");

    const mechStudents =
        document.getElementById("mechStudents");

    const eeeStudents =
        document.getElementById("eeeStudents");


    // Get principal table
    const table =
        document.getElementById("principalTable");


    /*
    Check whether the required HTML elements exist.

    If any element is missing,
    throw an error instead of allowing
    the program to fail silently.
    */

    if (!totalStudents) {

        throw new Error(
            "Total students element not found."
        );
    }

    if (!cseStudents) {

        throw new Error(
            "CSE students element not found."
        );
    }

    if (!itStudents) {

        throw new Error(
            "IT students element not found."
        );
    }

    if (!eceStudents) {

        throw new Error(
            "ECE students element not found."
        );
    }

    if (!mechStudents) {

        throw new Error(
            "MECH students element not found."
        );
    }

    if (!eeeStudents) {

        throw new Error(
            "EEE students element not found."
        );
    }

    if (!table) {

        throw new Error(
            "Principal table not found."
        );
    }


    /*
    length

    Returns the number of elements
    in the students array.

    Example:

    5 students → students.length = 5
    */

    totalStudents.textContent =
        students.length;


    /*
    reduce()

    Used to combine all students
    and calculate one final value.

    Here we count CSE students.
    */

    const cseCount =
        students.reduce(

            function(total, student) {

                /*
                If department is CSE,
                increase total by 1.

                Otherwise keep total unchanged.
                */

                return student.department === "CSE"
                    ? total + 1
                    : total;

            },

            // Initial value
            0
        );


    cseStudents.textContent =
        cseCount;


    // Count IT students
    const itCount =
        students.reduce(

            function(total, student) {

                return student.department === "IT"
                    ? total + 1
                    : total;

            },

            0
        );


    itStudents.textContent =
        itCount;


    // Count ECE students
    const eceCount =
        students.reduce(

            function(total, student) {

                return student.department === "ECE"
                    ? total + 1
                    : total;

            },

            0
        );


    eceStudents.textContent =
        eceCount;


    // Count MECH students
    const mechCount =
        students.reduce(

            function(total, student) {

                return student.department === "MECH"
                    ? total + 1
                    : total;

            },

            0
        );


    mechStudents.textContent =
        mechCount;


    // Count EEE students
    const eeeCount =
        students.reduce(

            function(total, student) {

                return student.department === "EEE"
                    ? total + 1
                    : total;

            },

            0
        );


    eeeStudents.textContent =
        eeeCount;


    /*
    Display students in Principal Dashboard.
    */

    if (students.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6">
                    No students registered.
                </td>
            </tr>
        `;

    } else {

        /*
        forEach()

        Used because we are performing
        an action for every student:
        creating and adding a table row.

        map() would create a new array,
        which we don't need here.
        */

        students.forEach(function(student) {

            // Create a new table row
            const row =
                document.createElement("tr");


            // Template literal
            row.innerHTML = `

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.department}</td>

                <td>${student.year}</td>

                <td>${student.section}</td>

                <td>${student.staff}</td>

            `;


            // Add row to the table
            table.appendChild(row);

        });
    }


} catch (error) {

    /*
    Handles unexpected errors
    in the Principal Dashboard.
    */

    console.error(
        "Principal dashboard error:",
        error
    );

    alert(
        "Unable to load Principal Dashboard."
    );
}