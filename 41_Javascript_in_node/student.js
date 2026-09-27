// ==================================================
// CUSTOM MODULE
// ==================================================

const {
    v4: uuidv4
} = require("uuid");


// Create student

function createStudent(
    name,
    department
) {

    return {

        id: uuidv4(),

        name: name,

        department: department

    };
}


// Export module

module.exports = {
    createStudent
};