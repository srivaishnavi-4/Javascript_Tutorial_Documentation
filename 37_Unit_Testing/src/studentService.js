const studentRepository =
    require("./studentRepository");


// Business logic
function getStudentResult(studentId) {

    // Get student from repository
    const student =
        studentRepository.findStudentById(studentId);


    // Student not found
    if (!student) {

        throw new Error("Student not found");

    }


    // Calculate total marks
    const total =
        student.marks.reduce(
            (sum, mark) => sum + mark,
            0
        );


    // Calculate average
    const average =
        total / student.marks.length;


    // Determine result
    const result =
        average >= 50
            ? "PASS"
            : "FAIL";


    return {

        id: student.id,

        name: student.name,

        average,

        result

    };
}


module.exports = {
    getStudentResult
};