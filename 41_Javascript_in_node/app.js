// ==================================================
// NODE.JS STUDENT MANAGEMENT POC
// ==================================================


// ==================================================
// 1. MODULES
// ==================================================

// Built-in Node.js modules

const http = require("http");
const fs = require("fs");
const path = require("path");

// Custom module

const {
    createStudent
} = require("./student");


// ==================================================
// 2. PROCESS OBJECT
// ==================================================

console.log("Node Version:", process.version);

console.log("Operating System:", process.platform);

console.log("Process ID:", process.pid);

console.log("Current Directory:", process.cwd());


// ==================================================
// 3. FILE PATHS
// ==================================================

const dataFile =
    path.join(__dirname, "students.json");

const htmlFile =
    path.join(__dirname, "public", "index.html");

const cssFile =
    path.join(__dirname, "public", "style.css");


// ==================================================
// 4. READ STUDENTS
// ==================================================

function getStudents() {

    try {

        const data =
            fs.readFileSync(
                dataFile,
                "utf-8"
            );

        return JSON.parse(data);

    } catch (error) {

        return [];

    }
}


// ==================================================
// 5. SAVE STUDENTS
// ==================================================

function saveStudents(students) {

    fs.writeFileSync(
        dataFile,
        JSON.stringify(
            students,
            null,
            2
        )
    );
}


// ==================================================
// 6. CREATE HTTP SERVER
// ==================================================

const server = http.createServer(
    function (request, response) {

        console.log(
            request.method,
            request.url
        );


        // ==================================================
        // HOME PAGE
        // ==================================================

        if (
            request.method === "GET" &&
            request.url === "/"
        ) {

            fs.readFile(
                htmlFile,
                "utf-8",
                function (error, data) {

                    if (error) {

                        response.writeHead(500);

                        response.end(
                            "Unable to load website"
                        );

                        return;
                    }


                    response.writeHead(
                        200,
                        {
                            "Content-Type":
                                "text/html"
                        }
                    );


                    response.end(data);

                }
            );

            return;
        }


        // ==================================================
        // CSS FILE
        // ==================================================

        if (
            request.method === "GET" &&
            request.url === "/style.css"
        ) {

            fs.readFile(
                cssFile,
                function (error, data) {

                    if (error) {

                        response.writeHead(404);

                        response.end(
                            "CSS not found"
                        );

                        return;
                    }


                    response.writeHead(
                        200,
                        {
                            "Content-Type":
                                "text/css"
                        }
                    );


                    response.end(data);

                }
            );

            return;
        }


        // ==================================================
        // GET STUDENTS
        // ==================================================

        if (
            request.method === "GET" &&
            request.url === "/students"
        ) {

            const students =
                getStudents();


            response.writeHead(
                200,
                {
                    "Content-Type":
                        "application/json"
                }
            );


            response.end(
                JSON.stringify(students)
            );

            return;
        }


        // ==================================================
        // ADD STUDENT
        // ==================================================

        if (
            request.method === "POST" &&
            request.url === "/students"
        ) {

            let body = "";


            // Receive request data

            request.on(
                "data",
                function (chunk) {

                    body += chunk;

                }
            );


            // Request completed

            request.on(
                "end",
                function () {

                    try {

                        const data =
                            JSON.parse(body);


                        // Validate data

                        if (
                            !data.name ||
                            !data.department
                        ) {

                            response.writeHead(
                                400,
                                {
                                    "Content-Type":
                                        "application/json"
                                }
                            );


                            response.end(
                                JSON.stringify({
                                    error:
                                        "Name and department are required"
                                })
                            );

                            return;
                        }


                        // Create student

                        const student =
                            createStudent(
                                data.name,
                                data.department
                            );


                        // Get existing students

                        const students =
                            getStudents();


                        // Add student

                        students.push(student);


                        // Save to JSON file

                        saveStudents(students);


                        // Send response

                        response.writeHead(
                            201,
                            {
                                "Content-Type":
                                    "application/json"
                            }
                        );


                        response.end(
                            JSON.stringify(student)
                        );

                    }

                    catch (error) {

                        response.writeHead(
                            400,
                            {
                                "Content-Type":
                                    "application/json"
                            }
                        );


                        response.end(
                            JSON.stringify({
                                error:
                                    "Invalid data"
                            })
                        );

                    }

                }
            );

            return;
        }


        // ==================================================
        // 404
        // ==================================================

        response.writeHead(
            404,
            {
                "Content-Type":
                    "text/plain"
            }
        );


        response.end(
            "Page not found"
        );

    }
);


// ==================================================
// 7. START SERVER
// ==================================================

const PORT = 3000;

server.listen(
    PORT,
    function () {

        console.log(
            `Server running at http://localhost:${PORT}`
        );

    }
);