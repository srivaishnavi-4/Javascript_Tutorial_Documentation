const fs = require("fs");
const path = require("path");


// JSON file location
const filePath = path.join(
    __dirname,
    "../data/students.json"
);


// Read students from JSON file
function getStudents() {

    const data = fs.readFileSync(
        filePath,
        "utf-8"
    );

    return JSON.parse(data);
}


// Find student by ID
function findStudentById(id) {

    const students = getStudents();

    return students.find(
        student => student.id === id
    );
}


module.exports = {
    findStudentById
};