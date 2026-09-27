const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const companyInput =
    document.getElementById("company");

const contactList =
    document.getElementById("contactList");

const searchInput =
    document.getElementById("searchInput");

const submitButton =
    document.getElementById("submitButton");

const cancelButton =
    document.getElementById("cancelButton");

const formTitle =
    document.getElementById("formTitle");

const errorMessage =
    document.getElementById("errorMessage");


const STORAGE_KEY =
    "vaishu-contacts";


let contacts =
    loadContacts();


let editingContactId =
    null;


// Load contacts from LocalStorage

function loadContacts() {

    try {

        const storedData =
            localStorage.getItem(STORAGE_KEY);


        if (!storedData) {
            return [];
        }


        const data =
            JSON.parse(storedData);


        if (!Array.isArray(data)) {

            throw new Error(
                "Invalid contact data."
            );
        }


        return data;

    } catch (error) {

        console.error(
            "Load error:",
            error
        );

        showError(
            "Unable to load contacts."
        );

        return [];
    }
}


// Save contacts

function saveContacts() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(contacts)
        );

    } catch (error) {

        console.error(
            "Storage error:",
            error
        );

        showError(
            "Unable to save contacts."
        );
    }
}


// Add or update contact

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        try {

            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const phone =
                phoneInput.value.trim();

            const company =
                companyInput.value.trim();


            validateContact(
                name,
                email,
                phone
            );


            if (editingContactId !== null) {

                updateContact(
                    name,
                    email,
                    phone,
                    company
                );

            } else {

                createContact(
                    name,
                    email,
                    phone,
                    company
                );
            }


            resetForm();

            displayContacts();

        } catch (error) {

            showError(
                error.message
            );
        }
    }
);


// Create

function createContact(
    name,
    email,
    phone,
    company
) {

    const contact = {

        id: Date.now(),

        name: name,

        email: email,

        phone: phone,

        company: company,

        createdAt:
            new Date().toISOString(),

        updatedAt:
            new Date().toISOString()
    };


    contacts.push(contact);

    saveContacts();
}


// Update

function updateContact(
    name,
    email,
    phone,
    company
) {

    const contact =
        contacts.find(
            function (item) {

                return item.id ===
                    editingContactId;
            }
        );


    if (!contact) {

        throw new Error(
            "Contact not found."
        );
    }


    contact.name = name;

    contact.email = email;

    contact.phone = phone;

    contact.company = company;

    contact.updatedAt =
        new Date().toISOString();


    saveContacts();
}


// Delete

function deleteContact(id) {

    const confirmed =
        confirm(
            "Delete this contact?"
        );


    if (!confirmed) {
        return;
    }


    contacts =
        contacts.filter(
            function (contact) {

                return contact.id !== id;
            }
        );


    saveContacts();

    displayContacts();
}


// Start editing

function editContact(id) {

    const contact =
        contacts.find(
            function (item) {

                return item.id === id;
            }
        );


    if (!contact) {

        showError(
            "Contact not found."
        );

        return;
    }


    editingContactId =
        id;


    nameInput.value =
        contact.name;

    emailInput.value =
        contact.email;

    phoneInput.value =
        contact.phone;

    companyInput.value =
        contact.company;


    formTitle.textContent =
        "Update Contact";

    submitButton.textContent =
        "Update Contact";

    cancelButton.classList.remove(
        "hidden"
    );


    nameInput.focus();
}


// Display contacts

function displayContacts() {

    contactList.innerHTML = "";


    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    const filteredContacts =
        contacts.filter(
            function (contact) {

                return (
                    contact.name
                        .toLowerCase()
                        .includes(searchTerm)

                    ||

                    contact.email
                        .toLowerCase()
                        .includes(searchTerm)

                    ||

                    contact.phone
                        .includes(searchTerm)

                    ||

                    contact.company
                        .toLowerCase()
                        .includes(searchTerm)
                );
            }
        );


    if (filteredContacts.length === 0) {

        contactList.innerHTML =
            `<div class="empty">
                No contacts found.
            </div>`;

        return;
    }


    filteredContacts.forEach(
        function (contact) {

            const card =
                document.createElement("div");

            card.className =
                "contact-card";


            const info =
                document.createElement("div");

            info.className =
                "contact-info";


            const name =
                document.createElement("h3");

            name.textContent =
                contact.name;


            const email =
                document.createElement("p");

            email.textContent =
                `Email: ${contact.email}`;


            const phone =
                document.createElement("p");

            phone.textContent =
                `Phone: ${contact.phone}`;


            const company =
                document.createElement("p");

            company.textContent =
                `Company: ${
                    contact.company || "Not provided"
                }`;


            info.appendChild(name);

            info.appendChild(email);

            info.appendChild(phone);

            info.appendChild(company);


            const actions =
                document.createElement("div");

            actions.className =
                "contact-actions";


            const editButton =
                document.createElement("button");

            editButton.textContent =
                "Edit";

            editButton.className =
                "edit-button";

            editButton.dataset.id =
                contact.id;


            const deleteButton =
                document.createElement("button");

            deleteButton.textContent =
                "Delete";

            deleteButton.className =
                "delete-button";

            deleteButton.dataset.id =
                contact.id;


            actions.appendChild(
                editButton
            );

            actions.appendChild(
                deleteButton
            );


            card.appendChild(info);

            card.appendChild(actions);

            contactList.appendChild(card);
        }
    );
}


// Event delegation

contactList.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest("button");


        if (!button) {
            return;
        }


        const id =
            Number(button.dataset.id);


        if (
            button.classList.contains(
                "edit-button"
            )
        ) {

            editContact(id);
        }


        if (
            button.classList.contains(
                "delete-button"
            )
        ) {

            deleteContact(id);
        }
    }
);


// Search

searchInput.addEventListener(
    "input",
    displayContacts
);


// Cancel editing

cancelButton.addEventListener(
    "click",
    resetForm
);


// Reset form

function resetForm() {

    contactForm.reset();


    editingContactId =
        null;


    formTitle.textContent =
        "Add Contact";


    submitButton.textContent =
        "Add Contact";


    cancelButton.classList.add(
        "hidden"
    );


    errorMessage.textContent = "";
}


// Validation

function validateContact(
    name,
    email,
    phone
) {

    if (!name) {

        throw new Error(
            "Name is required."
        );
    }


    if (!email) {

        throw new Error(
            "Email is required."
        );
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        throw new Error(
            "Enter a valid email address."
        );
    }


    if (!phone) {

        throw new Error(
            "Phone number is required."
        );
    }


    const phonePattern =
        /^[0-9+\-\s]{10,15}$/;


    if (!phonePattern.test(phone)) {

        throw new Error(
            "Enter a valid phone number."
        );
    }
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


// Initial display

displayContacts();