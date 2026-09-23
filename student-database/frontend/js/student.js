console.log("Student JS loaded");

try {

    // Get the form element through its id
    const studentForm =
        document.getElementById("studentForm");

    console.log("Form:", studentForm);


    // Check whether the form exists
    if (!studentForm) {
        throw new Error("Student form not found.");
    }


    // Event listener - executes when the form is submitted
    studentForm.addEventListener("submit", function(event) {

        try {

            // Prevent the browser's default form submission
            // This prevents the page from reloading/navigating
            event.preventDefault();

            console.log("Form submitted");


            // Check HTML required-field validation
            if (!studentForm.checkValidity()) {

                studentForm.reportValidity();

                return;
            }


            // Get form values AFTER the user submits the form
            const student = {

                // Number() converts the input value from String to Number
                id: Number(
                    document.getElementById("studentId").value
                ),

                // getElementById() gets the element
                // .value gets the value entered by the user
                name:
                    document.getElementById("name").value.trim(),

                dob:
                    document.getElementById("dob").value,

                gender:
                    document.getElementById("gender").value,

                email:
                    document.getElementById("email").value.trim(),

                phone:
                    document.getElementById("phone").value.trim(),

                department:
                    document.getElementById("department").value,

                year:
                    document.getElementById("year").value,

                section:
                    document.getElementById("section").value.trim(),

                parentName:
                    document.getElementById("parentName").value.trim(),

                parentPhone:
                    document.getElementById("parentPhone").value.trim(),

                staff:
                    document.getElementById("staff").value,

                address:
                    document.getElementById("address").value.trim()
            };


            // Check whether Student ID is a valid number
            if (isNaN(student.id) || student.id <= 0) {

                throw new Error(
                    "Student ID must be a valid number."
                );
            }


            // Display the student object in the console
            console.log("Student:", student);


            // Get existing students from LocalStorage
            let students = [];

            try {

                /*
                localStorage stores data as a string.

                JSON.parse()
                converts the stored JSON string
                back into a JavaScript array/object.
                */

                students =
                    JSON.parse(
                        localStorage.getItem("students")
                    ) || [];

            } catch (error) {

                console.error(
                    "Error reading LocalStorage:",
                    error
                );

                // If stored data is invalid,
                // start with an empty array
                students = [];
            }


            // Add the new student object to the array
            students.push(student);


            /*
            LocalStorage can store only strings.

            JSON.stringify()
            converts the JavaScript array/object
            into a JSON string.
            */

            localStorage.setItem(
                "students",
                JSON.stringify(students)
            );


            // Display success message
            const message =
                document.getElementById("message");

            if (message) {

                message.textContent =
                    "Student details added successfully!";

            }


            /*
            reset() clears the form fields.

            It does NOT remove data from the URL.
            It simply clears the values entered in the form.
            */

            studentForm.reset();


        } catch (error) {

            // Handles errors during form submission
            console.error(
                "Student registration error:",
                error
            );

            alert(
                "Unable to add student: " +
                error.message
            );
        }

    });


} catch (error) {

    // Handles errors while loading the student page
    console.error(
        "Student page error:",
        error
    );
}