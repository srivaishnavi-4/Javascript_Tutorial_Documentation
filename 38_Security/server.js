const express = require("express");
const helmet = require("helmet");

const app = express();
const PORT = 3000;

// Parse JSON request bodies.
app.use(express.json());

// --------------------------------------------------
// CSP
// --------------------------------------------------
// Helmet adds security-related HTTP headers.
// CSP controls which resources the browser is
// allowed to execute/load.
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'"],
                styleSrc: ["'self'"],
                objectSrc: ["'none'"]
            }
        }
    })
);

// Serve frontend files.
app.use(express.static("public"));

// --------------------------------------------------
// INPUT SANITIZATION
// --------------------------------------------------

function sanitizeInput(input) {
    if (typeof input !== "string") {
        return "";
    }

    return input
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// --------------------------------------------------
// FEEDBACK API
// --------------------------------------------------

app.post("/feedback", (req, res) => {

    const { name, message } = req.body;

    // Validate required fields.
    if (!name || !message) {
        return res.status(400).json({
            error: "Name and message are required"
        });
    }

    // Sanitize user-controlled input.
    const safeName = sanitizeInput(name);
    const safeMessage = sanitizeInput(message);

    res.json({
        message: "Feedback received",
        feedback: {
            name: safeName,
            message: safeMessage
        }
    });
});

app.listen(PORT, () => {
    console.log(
        `Server running at http://localhost:${PORT}`
    );
});