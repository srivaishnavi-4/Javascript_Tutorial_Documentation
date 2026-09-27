const socket = io();


// DOM elements

const usernameInput =
    document.getElementById("username");

const joinButton =
    document.getElementById("joinButton");

const messageInput =
    document.getElementById("messageInput");

const sendButton =
    document.getElementById("sendButton");

const messageForm =
    document.getElementById("messageForm");

const chatMessages =
    document.getElementById("chatMessages");

const connectionStatus =
    document.getElementById("connectionStatus");

const errorMessage =
    document.getElementById("errorMessage");


// Current user

let currentUser = "";


// Socket connection

socket.on("connect", function () {

    connectionStatus.textContent =
        "Connected";

    connectionStatus.style.color =
        "#bbf7d0";
});


// Socket disconnected

socket.on("disconnect", function () {

    connectionStatus.textContent =
        "Disconnected";

    connectionStatus.style.color =
        "#fecaca";
});


// Join chat

joinButton.addEventListener(
    "click",
    function () {

        const username =
            usernameInput.value.trim();


        if (!username) {

            showError(
                "Please enter your name."
            );

            return;
        }


        currentUser =
            username;


        usernameInput.disabled =
            true;

        joinButton.disabled =
            true;

        messageInput.disabled =
            false;

        sendButton.disabled =
            false;

        messageInput.focus();


        addSystemMessage(
            `${currentUser} joined the chat`
        );
    }
);


// Send message

messageForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (!currentUser) {

            showError(
                "Please join the chat first."
            );

            return;
        }


        const text =
            messageInput.value.trim();


        if (!text) {

            showError(
                "Message cannot be empty."
            );

            return;
        }


        const messageData = {

            username: currentUser,

            text: text,

            createdAt:
                new Date().toISOString()
        };


        // Send message to server

        socket.emit(
            "chatMessage",
            messageData
        );


        messageInput.value = "";

        messageInput.focus();
    }
);


// Receive message from server

socket.on(
    "chatMessage",
    function (messageData) {

        displayMessage(
            messageData
        );
    }
);


// Display message

function displayMessage(messageData) {

    const messageElement =
        document.createElement("div");


    const isMyMessage =
        messageData.username === currentUser;


    messageElement.className =
        isMyMessage
            ? "message my-message"
            : "message other-message";


    const sender =
        document.createElement("div");

    sender.className =
        "sender";

    sender.textContent =
        messageData.username;


    const text =
        document.createElement("p");

    text.className =
        "message-text";

    text.textContent =
        messageData.text;


    const time =
        document.createElement("span");

    time.className =
        "message-time";

    time.textContent =
        formatTime(
            messageData.createdAt
        );


    messageElement.appendChild(
        sender
    );

    messageElement.appendChild(
        text
    );

    messageElement.appendChild(
        time
    );


    chatMessages.appendChild(
        messageElement
    );


    scrollToBottom();
}


// System message

function addSystemMessage(text) {

    const element =
        document.createElement("p");

    element.textContent =
        text;

    element.style.textAlign =
        "center";

    element.style.marginBottom =
        "15px";

    element.style.color =
        "#64748b";

    element.style.fontSize =
        "12px";


    chatMessages.appendChild(
        element
    );
}


// Format time

function formatTime(dateString) {

    const date =
        new Date(dateString);


    return date.toLocaleTimeString(
        "en-IN",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


// Scroll to latest message

function scrollToBottom() {

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}


// Error handling

function showError(message) {

    errorMessage.textContent =
        message;


    setTimeout(
        function () {

            errorMessage.textContent = "";

        },
        2500
    );
}