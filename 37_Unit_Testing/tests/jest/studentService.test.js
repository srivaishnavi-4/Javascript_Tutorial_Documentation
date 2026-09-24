const studentService =
    require("../../src/studentService");

const studentRepository =
    require("../../src/studentRepository");


// MOCK THE REPOSITORY
// The real students.json file will NOT be used
// during these unit tests.

jest.mock("../../src/studentRepository");


describe("Student Result Service", () => {


    // Runs before every test
    beforeEach(() => {

        jest.clearAllMocks();

    });


    // -----------------------------------------
    // TEST 1: PASS
    // -----------------------------------------

    test("should return PASS when average is 50 or above", () => {

        // ARRANGE
        studentRepository.findStudentById
            .mockReturnValue({
                id: 1,
                name: "Vaishu",
                marks: [80, 70, 90]
            });


        // ACT
        const result =
            studentService.getStudentResult(1);


        // ASSERT
        expect(result.result)
            .toBe("PASS");

        expect(result.average)
            .toBe(80);

    });


    // -----------------------------------------
    // TEST 2: FAIL
    // -----------------------------------------

    test("should return FAIL when average is below 50", () => {

        // ARRANGE
        studentRepository.findStudentById
            .mockReturnValue({
                id: 2,
                name: "Priya",
                marks: [40, 45, 35]
            });


        // ACT
        const result =
            studentService.getStudentResult(2);


        // ASSERT
        expect(result.result)
            .toBe("FAIL");

        expect(result.average)
            .toBe(40);

    });


    // -----------------------------------------
    // TEST 3: STUDENT NOT FOUND
    // -----------------------------------------

    test("should throw error when student is not found", () => {

        // ARRANGE
        studentRepository.findStudentById
            .mockReturnValue(undefined);


        // ACT + ASSERT
        expect(() => {

            studentService.getStudentResult(999);

        }).toThrow("Student not found");

    });


    // -----------------------------------------
    // TEST 4: REPOSITORY CALL
    // -----------------------------------------

    test("should call repository with correct ID", () => {

        // ARRANGE
        studentRepository.findStudentById
            .mockReturnValue({
                id: 1,
                name: "Vaishu",
                marks: [80, 70, 90]
            });


        // ACT
        studentService.getStudentResult(1);


        // ASSERT
        expect(
            studentRepository.findStudentById
        ).toHaveBeenCalledWith(1);

    });

});