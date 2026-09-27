/*
====================================================
    JAVASCRIPT IN THE BROWSER - POC
====================================================

This project demonstrates:

1. DOM
2. Events
3. Rendering
4. localStorage
5. History API
6. Media API

Realtime example:
Student Dashboard
*/


// ==================================================
// 1. DOM SELECTION
// ==================================================

const app = document.querySelector("#app");

const status = document.querySelector("#status");

const navigation = document.querySelector("nav");


// ==================================================
// 2. STORAGE
// ==================================================

/*
localStorage stores only strings.

Therefore:

JavaScript Object
        ↓
JSON.stringify()
        ↓
String
        ↓
localStorage
*/


let students = JSON.parse(
    localStorage.getItem("students") || "[]"
);


// ==================================================
// CAMERA STATE
// ==================================================

let cameraStream = null;


// ==================================================
// 3. SAVE STUDENTS
// ==================================================

function saveStudents() {

    /*
    Convert JavaScript array into JSON string
    before storing it.
    */

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}


// ==================================================
// 4. RENDER HOME PAGE
// ==================================================

function renderHome() {

    /*
    DOM manipulation:
    We dynamically change the page content.
    */

    app.innerHTML = `
        <section class="card">

            <h2>Welcome 👋</h2>

            <p>
                This is a Student Dashboard
                demonstrating browser JavaScript APIs.
            </p>

            <p>
                Total Students:
                <strong>${students.length}</strong>
            </p>

        </section>
    `;
}


// ==================================================
// 5. RENDER STUDENT PAGE
// ==================================================

function renderStudents() {

    /*
    Create the student page dynamically.
    */

    app.innerHTML = `

        <section class="card">

            <h2>Student Management</h2>

            <!-- EVENT: submit -->
            <form id="studentForm">

                <input
                    type="text"
                    id="studentName"
                    placeholder="Enter student name"
                >

                <button type="submit">
                    Add Student
                </button>

            </form>


            <!-- Students will be rendered here -->

            <div id="studentList"></div>

        </section>
    `;


    // ----------------------------------------------
    // DOM selection
    // ----------------------------------------------

    const form =
        document.querySelector("#studentForm");

    const studentList =
        document.querySelector("#studentList");


    // ----------------------------------------------
    // Render existing students
    // ----------------------------------------------

    students.forEach((student, index) => {

        const studentElement =
            document.createElement("div");


        studentElement.className = "student";


        studentElement.innerHTML = `

            <span>
                ${student.name}
            </span>

            <button
                class="delete-btn"
                data-index="${index}"
            >
                Delete
            </button>

        `;


        studentList.appendChild(
            studentElement
        );
    });


    // ==================================================
    // 6. FORM EVENT
    // ==================================================

    form.addEventListener(
        "submit",
        function (event) {

            /*
            Prevent browser from
            refreshing the page.
            */

            event.preventDefault();


            const input =
                document.querySelector("#studentName");


            const name =
                input.value.trim();


            // Validation

            if (name === "") {

                status.textContent =
                    "Please enter a student name.";

                return;
            }


            // ------------------------------------------
            // Create student object
            // ------------------------------------------

            const student = {

                id: Date.now(),

                name: name

            };


            // Add to array

            students.push(student);


            // Save to localStorage

            saveStudents();


            // Re-render UI

            renderStudents();


            // Clear status

            status.textContent =
                `${name} added successfully.`;
        }
    );


    // ==================================================
    // 7. EVENT BUBBLING / DELEGATION
    // ==================================================

    /*
    Instead of attaching a click listener
    to every Delete button,

    we attach ONE listener to the parent.

    Click:

        Delete button
             ↓
        studentList
             ↓
        event listener
    */

    studentList.addEventListener(
        "click",
        function (event) {

            /*
            Check whether the clicked element
            is a Delete button.
            */

            if (
                !event.target.classList.contains(
                    "delete-btn"
                )
            ) {
                return;
            }


            // Get student index

            const index =
                Number(
                    event.target.dataset.index
                );


            const deletedStudent =
                students[index];


            // Remove student

            students.splice(index, 1);


            // Update storage

            saveStudents();


            // Update DOM

            renderStudents();


            status.textContent =
                `${deletedStudent.name} deleted.`;
        }
    );
}


// ==================================================
// 8. MEDIA API - CAMERA
// ==================================================

function renderCamera() {

    app.innerHTML = `

        <section class="card">

            <h2>Student Profile Camera</h2>

            <p>
                This uses the browser Media API
                to access the camera.
            </p>


            <video
                id="video"
                autoplay
                playsinline
            ></video>


            <button id="startCamera">
                Start Camera
            </button>


            <button id="stopCamera">
                Stop Camera
            </button>

        </section>
    `;


    const video =
        document.querySelector("#video");


    const startButton =
        document.querySelector("#startCamera");


    const stopButton =
        document.querySelector("#stopCamera");


    // ==================================================
    // START CAMERA
    // ==================================================

    startButton.addEventListener(
        "click",
        async function () {

            try {

                /*
                Ask browser for camera permission.
                */

                cameraStream =
                    await navigator.mediaDevices
                        .getUserMedia({
                            video: true
                        });


                /*
                Display camera stream
                inside the video element.
                */

                video.srcObject =
                    cameraStream;


                status.textContent =
                    "Camera started successfully.";

            }

            catch (error) {

                console.error(error);

                status.textContent =
                    "Camera permission denied or unavailable.";
            }
        }
    );


    // ==================================================
    // STOP CAMERA
    // ==================================================

    stopButton.addEventListener(
        "click",
        function () {

            if (!cameraStream) {
                return;
            }


            /*
            Camera contains media tracks.

            Stop every track to release
            the camera device.
            */

            cameraStream
                .getTracks()
                .forEach(function (track) {

                    track.stop();

                });


            cameraStream = null;

            video.srcObject = null;


            status.textContent =
                "Camera stopped.";
        }
    );
}


// ==================================================
// 9. HISTORY API
// ==================================================

function navigate(page) {

    /*
    pushState changes the browser URL
    without reloading the page.
    */

    history.pushState(
        {
            page: page
        },

        "",

        `?page=${page}`
    );


    // Render the selected page

    renderPage(page);
}


// ==================================================
// 10. RENDER PAGE
// ==================================================

function renderPage(page) {

    /*
    Decide which page should be displayed.
    */

    if (page === "students") {

        renderStudents();

        return;
    }


    if (page === "camera") {

        renderCamera();

        return;
    }


    renderHome();
}


// ==================================================
// 11. NAVIGATION EVENT
// ==================================================

navigation.addEventListener(
    "click",
    function (event) {

        /*
        Event bubbling allows the nav element
        to receive clicks from its buttons.
        */

        if (
            !event.target.matches(
                "button[data-page]"
            )
        ) {
            return;
        }


        const page =
            event.target.dataset.page;


        navigate(page);
    }
);


// ==================================================
// 12. BROWSER BACK / FORWARD
// ==================================================

window.addEventListener(
    "popstate",
    function (event) {

        /*
        popstate fires when the user uses
        browser Back or Forward buttons.
        */

        const page =
            event.state?.page || "home";


        renderPage(page);
    }
);


// ==================================================
// 13. INITIAL PAGE
// ==================================================

/*
When the page first loads, check the URL.

Example:

? page=students

will directly open Students page.
*/

const params =
    new URLSearchParams(
        window.location.search
    );


const initialPage =
    params.get("page") || "home";


renderPage(initialPage);