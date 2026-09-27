// ==========================================
// SOCKET.IO POC
// ==========================================

// Built-in Node.js modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Socket.IO
const { Server } = require("socket.io");


// ==========================================
// HTTP SERVER
// ==========================================

const server = http.createServer(
    function (request, response) {

        // Serve HTML
        if (request.url === "/") {

            const filePath =
                path.join(
                    __dirname,
                    "public",
                    "index.html"
                );

            fs.readFile(
                filePath,
                "utf-8",
                function (error, data) {

                    if (error) {

                        response.writeHead(500);

                        response.end(
                            "Unable to load page"
                        );

                        return;
                    }

                    response.writeHead(200, {
                        "Content-Type": "text/html"
                    });

                    response.end(data);
                }
            );

            return;
        }


        // Serve CSS
        if (request.url === "/style.css") {

            const filePath =
                path.join(
                    __dirname,
                    "public",
                    "style.css"
                );

            fs.readFile(
                filePath,
                function (error, data) {

                    if (error) {

                        response.writeHead(404);

                        response.end(
                            "CSS not found"
                        );

                        return;
                    }

                    response.writeHead(200, {
                        "Content-Type": "text/css"
                    });

                    response.end(data);
                }
            );

            return;
        }


        response.writeHead(404);

        response.end("Not Found");
    }
);


// ==========================================
// SOCKET.IO SERVER
// ==========================================

const io = new Server(server);


// ==========================================
// CLIENT CONNECTION
// ==========================================

io.on(
    "connection",
    function (socket) {

        console.log(
            "Client connected:",
            socket.id
        );


        // ==========================================
        // RECEIVE MESSAGE
        // ==========================================

        socket.on(
            "student-message",
            function (data) {

                console.log(
                    "Message received:",
                    data
                );


                // Send message to ALL connected clients

                io.emit(
                    "student-message",
                    data
                );
            }
        );


        // ==========================================
        // DISCONNECT
        // ==========================================

        socket.on(
            "disconnect",
            function () {

                console.log(
                    "Client disconnected:",
                    socket.id
                );

            }
        );
    }
);


// ==========================================
// START SERVER
// ==========================================

const PORT = 3000;

server.listen(
    PORT,
    function () {

        console.log(
            `Server running at http://localhost:${PORT}`
        );

    }
);