const {
    getStudentResult
} = require("./studentService");


try {

    const result =
        getStudentResult(1);


    console.log("Student Result:");

    console.log(result);

} catch (error) {

    console.error(error.message);

}