const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);


// Serve frontend files

app.use(express.static("public"));


// When a user connects

io.on("connection", function (socket) {

    console.log(
        "User connected:",
        socket.id
    );


    // Receive message from a client

    socket.on("chatMessage", function (messageData) {

        console.log(
            "Message received:",
            messageData
        );


        // Send message to all connected users

        io.emit(
            "chatMessage",
            messageData
        );
    });


    // When user disconnects

    socket.on("disconnect", function () {

        console.log(
            "User disconnected:",
            socket.id
        );
    });

});


const PORT = 3000;

server.listen(PORT, function () {

    console.log(
        `Chat server running at http://localhost:${PORT}`
    );
});