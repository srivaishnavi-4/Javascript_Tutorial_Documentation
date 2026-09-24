const form =
    document.getElementById("feedbackForm");

const result =
    document.getElementById("result");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const message =
        document.getElementById("message").value;

    const response =
        await fetch("/feedback", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                message
            })
        });

    const data = await response.json();

    // textContent is safer than innerHTML
    // when displaying user-controlled data.
    result.textContent =
        JSON.stringify(data, null, 2);
});