const { expect } = require("chai");

const studentService =
    require("../../src/studentService");

const studentRepository =
    require("../../src/studentRepository");


// Save original function
const originalFindStudentById =
    studentRepository.findStudentById;


// Helper to mock repository
function mockStudent(student) {

    studentRepository.findStudentById =
        () => student;

}


// Restore original function
function restoreRepository() {

    studentRepository.findStudentById =
        originalFindStudentById;

}


describe("Student Result Service", () => {


    // Restore repository after each test
    afterEach(() => {

        restoreRepository();

    });


    // -----------------------------------------
    // TEST 1
    // -----------------------------------------

    it("should return PASS when average is 50 or above", () => {

        // ARRANGE
        mockStudent({
            id: 1,
            name: "Vaishu",
            marks: [80, 70, 90]
        });


        // ACT
        const result =
            studentService.getStudentResult(1);


        // ASSERT
        expect(result.result)
            .to.equal("PASS");

        expect(result.average)
            .to.equal(80);

    });


    // -----------------------------------------
    // TEST 2
    // -----------------------------------------

    it("should return FAIL when average is below 50", () => {

        // ARRANGE
        mockStudent({
            id: 2,
            name: "Priya",
            marks: [40, 45, 35]
        });


        // ACT
        const result =
            studentService.getStudentResult(2);


        // ASSERT
        expect(result.result)
            .to.equal("FAIL");

        expect(result.average)
            .to.equal(40);

    });


    // -----------------------------------------
    // TEST 3
    // -----------------------------------------

    it("should throw error when student is not found", () => {

        // ARRANGE
        mockStudent(undefined);


        // ACT + ASSERT
        expect(() => {

            studentService.getStudentResult(999);

        }).to.throw("Student not found");

    });


    // -----------------------------------------
    // TEST 4
    // -----------------------------------------

    it("should calculate average correctly", () => {

        // ARRANGE
        mockStudent({
            id: 3,
            name: "Kavi",
            marks: [60, 70, 80]
        });


        // ACT
        const result =
            studentService.getStudentResult(3);


        // ASSERT
        expect(result.average)
            .to.equal(70);

    });

});