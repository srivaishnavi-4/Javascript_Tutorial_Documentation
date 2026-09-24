# Unit Testing --- Complete Guide with Mini Real-Time POC

## 1. What is Unit Testing?

Unit testing is the process of testing the smallest independently
testable part of an application, usually a function, method, or module.

The goal is to verify that one unit produces the expected output for a
given input without depending on unrelated external systems.

``` text
Input
  ↓
Unit / Function
  ↓
Expected Behavior
  ↓
Assertion
  ↓
Pass / Fail
```

### Why is it used?

-   Detects defects early.
-   Verifies business logic independently.
-   Makes refactoring safer.
-   Reduces debugging effort.
-   Helps prevent regression.
-   Documents expected behavior through executable tests.

### Alternative / Related Approaches

-   Integration testing --- tests multiple connected components.
-   End-to-end testing --- tests the complete application flow.
-   Manual testing --- useful for exploratory scenarios but less
    repeatable.

------------------------------------------------------------------------

## 2. Unit Under Test

The **Unit Under Test (UUT)** is the specific function, method, or
module being tested.

In this POC:

``` js
getStudentResult(studentId)
```

is the unit under test.

``` text
Repository
    ↓
Student Service  ← Unit Under Test
    ↓
Result
```

### Why is it used?

Identifying the UUT keeps each test focused on one responsibility.

------------------------------------------------------------------------

## 3. Test Case

A test case defines a condition, input, action, and expected result.

Example:

``` text
Input:
marks = [80, 70, 90]

Expected:
average = 80
result = PASS
```

Implementation:

``` js
test("should return PASS", () => {
    const result = studentService.getStudentResult(1);

    expect(result.result).toBe("PASS");
});
```

Output:

``` text
✓ should return PASS
```

### Why is it used?

It converts expected application behavior into an automated, repeatable
check.

### Alternative

Parameterized or data-driven tests are useful when the same behavior
must be tested with many inputs.

------------------------------------------------------------------------

## 4. Test Suite

A **test suite** groups related test cases.

``` js
describe("Student Result Service", () => {

    test("should return PASS", () => {
        // test
    });

    test("should return FAIL", () => {
        // test
    });

});
```

### Why is it used?

It organizes tests by feature or module and makes test output easier to
understand.

### Alternative

Mocha uses `describe()` and `it()` for the same purpose.

------------------------------------------------------------------------

## 5. Arrange--Act--Assert

AAA is a common structure for writing readable tests.

``` text
Arrange → prepare inputs and dependencies
Act     → execute the unit
Assert  → verify the result
```

Implementation:

``` js
// Arrange
studentRepository.findStudentById.mockReturnValue({
    id: 1,
    name: "Vaishu",
    marks: [80, 70, 90]
});

// Act
const result = studentService.getStudentResult(1);

// Assert
expect(result.result).toBe("PASS");
```

### Why is it used?

It clearly separates preparation, execution, and verification.

### Alternative

**Given--When--Then** is commonly used in BDD-style tests.

------------------------------------------------------------------------

## 6. Assertions

An assertion compares the actual result with the expected result.

Jest:

``` js
expect(result.average).toBe(80);
```

Chai:

``` js
expect(result.average).to.equal(80);
```

### Output

``` text
✓ should calculate average correctly
```

### Why is it used?

Assertions automatically determine whether the behavior is correct.

### Alternatives

-   Jest matchers
-   Chai assertions
-   Node.js `assert`
-   Jasmine matchers

------------------------------------------------------------------------

## 7. Positive Testing

Positive tests verify valid and expected behavior.

``` js
studentRepository.findStudentById.mockReturnValue({
    id: 1,
    name: "Vaishu",
    marks: [80, 70, 90]
});

const result = studentService.getStudentResult(1);

expect(result.result).toBe("PASS");
```

Output:

``` text
✓ should return PASS when average is 50 or above
```

### Why is it used?

It verifies the normal successful path.

### Alternative

Data-driven tests can verify multiple valid scenarios using one test
structure.

------------------------------------------------------------------------

## 8. Negative Testing

Negative tests verify unsuccessful or invalid conditions.

``` js
studentRepository.findStudentById.mockReturnValue({
    id: 2,
    name: "Priya",
    marks: [40, 45, 35]
});

const result = studentService.getStudentResult(2);

expect(result.result).toBe("FAIL");
```

Output:

``` text
✓ should return FAIL when average is below 50
```

### Why is it used?

It ensures that the application behaves correctly when business
conditions are not satisfied.

------------------------------------------------------------------------

## 9. Error Testing

Error testing verifies that expected errors are generated correctly.

``` js
studentRepository.findStudentById
    .mockReturnValue(undefined);

expect(() => {
    studentService.getStudentResult(999);
}).toThrow("Student not found");
```

Output:

``` text
✓ should throw error when student is not found
```

### Why is it used?

It prevents failures from being silently ignored and verifies
predictable error handling.

### Alternatives

Errors can also be tested through:

-   rejected Promises
-   callbacks
-   HTTP error responses
-   custom error classes

------------------------------------------------------------------------

## 10. Edge Case Testing

An edge case is an unusual but valid condition.

For a marks application:

``` text
marks = [50, 50, 50]
average = 50
result = PASS
```

Test:

``` js
studentRepository.findStudentById.mockReturnValue({
    id: 4,
    name: "Boundary Student",
    marks: [50, 50, 50]
});

const result = studentService.getStudentResult(4);

expect(result.result).toBe("PASS");
```

### Why is it used?

It checks behavior at unusual or important boundaries where bugs
commonly occur.

### Alternatives

-   Boundary testing
-   Equivalence partitioning
-   Property-based testing

------------------------------------------------------------------------

## 11. Boundary Testing

Boundary testing focuses on values at or around a limit.

Our rule is:

``` js
average >= 50
```

Important values are:

``` text
49  → FAIL
50  → PASS
51  → PASS
```

### Why is it used?

Conditions such as `<`, `<=`, `>`, and `>=` can easily contain
off-by-one errors.

### Alternative

Equivalence partitioning divides inputs into groups such as:

``` text
Below 50
50 or above
```

------------------------------------------------------------------------

## 12. Test Lifecycle Hooks

Test frameworks provide hooks for setup and cleanup.

Common hooks:

``` text
beforeAll
beforeEach
afterEach
afterAll
```

### `beforeEach`

Runs before every test.

``` js
beforeEach(() => {
    jest.clearAllMocks();
});
```

### Why is it used?

It resets test state so that one test does not affect another.

------------------------------------------------------------------------

## 13. `afterEach`

Runs after every test.

``` js
afterEach(() => {
    restoreRepository();
});
```

### Why is it used?

It cleans up changes made by a test.

### Alternative

For global setup or cleanup, use `beforeAll()` and `afterAll()`.

------------------------------------------------------------------------

## 14. `beforeAll` and `afterAll`

`beforeAll()` runs once before the test suite.

``` js
beforeAll(() => {
    console.log("Test setup");
});
```

`afterAll()` runs once after the suite.

``` js
afterAll(() => {
    console.log("Test cleanup");
});
```

### Why are they used?

They are useful for expensive resources that should be created or
removed once.

Examples:

-   temporary files
-   test servers
-   shared configuration
-   external test resources

### Caution

Overusing shared state can reduce test isolation.

------------------------------------------------------------------------

# 15. Test Isolation

Test isolation means every test should be independent.

``` text
Test A → independent
Test B → independent
Test C → independent
```

A failure in Test A should not make Test B fail because of leftover
state.

### Why is it used?

It makes failures easier to diagnose and tests safer to run in any
order.

### Alternatives

-   Fresh fixtures
-   Dependency injection
-   Setup/teardown hooks
-   Independent test data

------------------------------------------------------------------------

# 16. Mocking

Mocking replaces a real dependency with a controlled fake
implementation.

Real application:

``` text
studentService
      ↓
studentRepository
      ↓
students.json
```

Unit test:

``` text
studentService
      ↓
Mock repository
      ↓
Fake student
```

Jest:

``` js
jest.mock("../../src/studentRepository");

studentRepository.findStudentById.mockReturnValue({
    id: 1,
    name: "Vaishu",
    marks: [80, 70, 90]
});
```

### Why is it used?

Mocking isolates the unit from dependencies such as:

-   databases
-   APIs
-   file systems
-   payment gateways
-   email services

This makes tests faster and deterministic.

### Alternatives

-   Stub
-   Spy
-   Fake
-   Dependency injection

------------------------------------------------------------------------

# 17. Stub

A **stub** provides predefined responses to control a dependency.

``` js
studentRepository.findStudentById = () => ({
    id: 1,
    name: "Vaishu",
    marks: [80, 70, 90]
});
```

### Why is it used?

It lets the test control what a dependency returns.

### Difference from Mock

A stub mainly controls behavior; a mock can also verify interactions
such as whether a function was called.

------------------------------------------------------------------------

# 18. Spy

A **spy** records how a function is used.

Example:

``` js
const spy = jest.spyOn(
    studentRepository,
    "findStudentById"
);

studentService.getStudentResult(1);

expect(spy).toHaveBeenCalledWith(1);
```

### Why is it used?

It verifies interactions without necessarily replacing the complete
behavior.

### Alternative

Mock functions can replace the implementation and verify calls.

------------------------------------------------------------------------

# 19. Fake

A fake is a simplified working implementation of a dependency.

Example:

``` js
const fakeRepository = {
    findStudentById: () => ({
        id: 1,
        name: "Vaishu",
        marks: [80, 70, 90]
    })
};
```

### Why is it used?

It provides realistic behavior without using the real dependency.

### Alternative

Mocks and stubs are commonly used when only specific behavior is needed.

------------------------------------------------------------------------

# 20. Test Doubles

**Test doubles** are replacements for real dependencies during tests.

Main types:

``` text
Test Doubles
│
├── Mock
├── Stub
├── Spy
└── Fake
```

They have different purposes:

  Type   Main Purpose
  ------ -------------------------------------
  Mock   Control and verify interaction
  Stub   Return predefined data
  Spy    Observe calls
  Fake   Provide simplified working behavior

------------------------------------------------------------------------

# 21. Jest

Jest is a JavaScript testing framework that provides:

-   Test runner
-   Assertions
-   Mocking
-   Matchers
-   Setup/teardown
-   Coverage support

Example:

``` js
test("should calculate average", () => {

    const result = {
        average: 80
    };

    expect(result.average).toBe(80);

});
```

Output:

``` text
✓ should calculate average
```

### Why is it used?

Jest provides most common testing features in one integrated framework.

### Alternatives

-   Mocha
-   Vitest
-   Jasmine
-   AVA

------------------------------------------------------------------------

# 22. Mocha

Mocha is a JavaScript test framework mainly responsible for executing
and organizing tests.

``` js
describe("Student Result Service", () => {

    it("should calculate average", () => {

        expect(result.average).to.equal(80);

    });

});
```

Output:

``` text
Student Result Service
  ✓ should calculate average

1 passing
```

### Why is it used?

Mocha provides a flexible testing structure and allows developers to
select supporting libraries.

### Alternatives

-   Jest
-   Vitest
-   Jasmine

------------------------------------------------------------------------

# 23. Chai

Chai is an assertion library commonly used with Mocha.

``` js
const { expect } = require("chai");

expect(result.average).to.equal(80);
```

### Why is it used?

It provides readable assertion styles.

Common Chai styles:

``` js
expect(value).to.equal(10);

expect(value).to.be.a("number");

expect(array).to.include(10);
```

### Alternatives

-   Jest assertions
-   Node.js `assert`
-   Jasmine matchers

------------------------------------------------------------------------

# 24. Jest vs Mocha + Chai

  Feature         Jest              Mocha + Chai
  --------------- ----------------- ---------------------------
  Test runner     Yes               Mocha
  Assertions      Built in          Chai
  Mocking         Built in          Usually additional/manual
  Configuration   More integrated   More flexible
  Setup           Simple            Modular

Conceptually:

``` text
Jest
= Runner + Assertions + Mocking
```

``` text
Mocha + Chai
= Runner + Assertions
```

------------------------------------------------------------------------

# 25. Asynchronous Unit Testing

JavaScript applications frequently use asynchronous operations such as
APIs and file/database access.

Jest supports `async/await`:

``` js
test("should get student asynchronously", async () => {

    const result =
        await getStudentResult(1);

    expect(result.result).toBe("PASS");

});
```

### Why is it used?

The test must wait for asynchronous work to complete before making
assertions.

### Alternatives

-   Promise chaining
-   `done` callback
-   async/await

------------------------------------------------------------------------

# 26. Promise Testing

For rejected Promises:

``` js
await expect(
    getStudentResult(999)
).rejects.toThrow("Student not found");
```

### Why is it used?

It verifies asynchronous failures correctly.

### Alternative

Use `try/catch`:

``` js
try {
    await getStudentResult(999);
} catch (error) {
    expect(error.message).toBe("Student not found");
}
```

------------------------------------------------------------------------

# 27. Parameterized / Data-Driven Tests

Parameterized testing runs the same test logic against multiple inputs.

Example:

``` js
test.each([
    [[80, 70, 90], "PASS"],
    [[40, 45, 35], "FAIL"],
    [[50, 50, 50], "PASS"]
])(
    "marks %p should produce %s",
    (marks, expected) => {

        // test logic
    }
);
```

### Why is it used?

It avoids duplicating nearly identical test cases.

### Alternative

Write separate tests when each scenario has significantly different
behavior.

------------------------------------------------------------------------

# 28. Fixtures

A **fixture** is predefined data used by tests.

Example:

``` js
const studentFixture = {
    id: 1,
    name: "Vaishu",
    marks: [80, 70, 90]
};
```

Then:

``` js
studentRepository.findStudentById
    .mockReturnValue(studentFixture);
```

### Why is it used?

Fixtures keep test data consistent and reduce repeated setup code.

### Alternatives

-   Factory functions
-   Inline test data
-   Generated test data

------------------------------------------------------------------------

# 29. Dependency Injection

Dependency injection means providing a dependency to a component instead
of creating it internally.

Without injection:

``` js
const repository = require("./studentRepository");
```

With injection:

``` js
function createStudentService(repository) {

    return {
        getStudentResult(studentId) {
            // use repository
        }
    };
}
```

### Why is it used?

Dependencies can easily be replaced with mocks or fakes during testing.

### Alternative

Module mocking can replace dependencies without changing the
architecture.

------------------------------------------------------------------------

# 30. Code Coverage

Code coverage measures which parts of the source code are executed by
tests.

Common metrics:

``` text
Statements
Branches
Functions
Lines
```

Jest:

``` bash
npx jest --coverage
```

Typical report:

``` text
Statements   95%
Branches     90%
Functions    100%
Lines        95%
```

### Why is it used?

It identifies code that tests may not be exercising.

### Important

High coverage does **not automatically mean high-quality tests**. The
assertions must still verify meaningful behavior.

### Alternatives

-   Manual coverage analysis
-   Coverage tools integrated with CI systems

------------------------------------------------------------------------

# 31. Regression Testing

Regression testing checks that existing functionality still works after
code changes.

Example:

``` text
Old code → tests pass

Change code
     ↓
Run tests
     ↓
Existing tests still pass
```

### Why is it used?

It prevents a new change from accidentally breaking previously working
functionality.

### Alternative

Automated CI test suites can run regression tests after every code
change.

------------------------------------------------------------------------

# 32. Unit vs Integration Testing

### Unit Testing

``` text
Service
  ↓
Mock dependency
```

Tests one unit in isolation.

### Integration Testing

``` text
Service
  ↓
Repository
  ↓
Real data source
```

Tests whether components work together.

### Why distinguish them?

A unit test can verify business logic while an integration test verifies
communication between components.

------------------------------------------------------------------------

# 33. Unit vs End-to-End Testing

### Unit

``` text
Function → Function Result
```

### Integration

``` text
Service → Repository → Data Source
```

### E2E

``` text
Browser
   ↓
Frontend
   ↓
API
   ↓
Backend
   ↓
Database
```

E2E tests validate a complete user workflow.

------------------------------------------------------------------------

# 34. TDD --- Test-Driven Development

TDD is a development approach based on:

``` text
RED
 ↓
Write failing test
 ↓
GREEN
 ↓
Write minimum code to pass
 ↓
REFACTOR
 ↓
Improve implementation
```

Example:

``` text
1. Write test for PASS result
2. Test fails
3. Implement result logic
4. Test passes
5. Refactor code
```

### Why is it used?

TDD encourages testable design and makes expected behavior explicit
before implementation.

### Alternative

Traditional development can implement functionality first and tests
afterward.

------------------------------------------------------------------------

# 35. BDD --- Behavior-Driven Development

BDD describes software behavior from a user/business perspective.

Example:

``` text
Given a student has marks 80, 70, 90
When the result is calculated
Then the student should PASS
```

### Why is it used?

It creates a common language between developers, testers, and business
stakeholders.

### Alternative

AAA-style unit tests focus more directly on implementation behavior.

------------------------------------------------------------------------

# 36. Snapshot Testing

Snapshot testing stores an expected representation of output and
compares future results against it.

Example:

``` js
expect(component).toMatchSnapshot();
```

### Why is it used?

It is particularly useful for UI/component output where large structures
need regression checks.

### Alternative

Explicit assertions are often clearer for business logic.

------------------------------------------------------------------------

# 37. Test Organization

A common project structure is:

``` text
project/
│
├── src/
│   ├── studentRepository.js
│   └── studentService.js
│
├── tests/
│   ├── jest/
│   │   └── studentService.test.js
│   └── mocha/
│       └── studentService.test.js
│
├── data/
│   └── students.json
│
└── package.json
```

### Why is it used?

Separating application code, test code, and data improves
maintainability.

### Alternatives

Some projects keep tests beside source files:

``` text
studentService.js
studentService.test.js
```

------------------------------------------------------------------------

# 38. Unit Testing Best Practices

### 1. Test one behavior at a time

``` js
test("should return PASS", () => {
    // one behavior
});
```

### 2. Keep tests independent

Do not make Test B depend on Test A.

### 3. Use meaningful test names

Prefer:

``` js
"should return FAIL when average is below 50"
```

over:

``` js
"test1"
```

### 4. Mock external dependencies

Do not require a real external service for a unit test.

### 5. Test edge cases

Check boundaries and unusual valid inputs.

### 6. Keep tests deterministic

The same input should produce the same result.

### 7. Avoid testing implementation details unnecessarily

Focus on observable behavior.

### 8. Keep tests readable

AAA and descriptive names help.

------------------------------------------------------------------------

# 39. Mini Real-Time POC

The POC is a **Student Result Service**.

It reads students from a JSON file and calculates the result.

``` text
students.json
     ↓
studentRepository
     ↓
studentService
     ↓
average + PASS/FAIL
```

------------------------------------------------------------------------

## 40. `data/students.json`

``` json
[
    {
        "id": 1,
        "name": "Vaishu",
        "marks": [80, 75, 90]
    },
    {
        "id": 2,
        "name": "Priya",
        "marks": [40, 45, 35]
    },
    {
        "id": 3,
        "name": "Kavi",
        "marks": [60, 70, 80]
    }
]
```

This is the POC's simple data source.

------------------------------------------------------------------------

## 41. `src/studentRepository.js`

``` js
const fs = require("fs");
const path = require("path");

const filePath = path.join(
    __dirname,
    "../data/students.json"
);

function getStudents() {

    const data = fs.readFileSync(
        filePath,
        "utf-8"
    );

    return JSON.parse(data);
}

function findStudentById(id) {

    const students = getStudents();

    return students.find(
        student => student.id === id
    );
}

module.exports = {
    findStudentById
};
```

### Why is it used?

The repository isolates data-access logic from business logic.

------------------------------------------------------------------------

## 42. `src/studentService.js`

``` js
const studentRepository =
    require("./studentRepository");

function getStudentResult(studentId) {

    const student =
        studentRepository.findStudentById(studentId);

    if (!student) {
        throw new Error("Student not found");
    }

    const total =
        student.marks.reduce(
            (sum, mark) => sum + mark,
            0
        );

    const average =
        total / student.marks.length;

    const result =
        average >= 50 ? "PASS" : "FAIL";

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
```

### Why is it used?

This contains the actual business rule:

``` js
average >= 50 ? "PASS" : "FAIL"
```

------------------------------------------------------------------------

## 43. `src/app.js`

``` js
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
```

Run:

``` bash
npm start
```

Output:

``` text
Student Result:

{
  id: 1,
  name: 'Vaishu',
  average: 81.66666666666667,
  result: 'PASS'
}
```

------------------------------------------------------------------------

# 44. Jest Test

`tests/jest/studentService.test.js`

``` js
const studentService =
    require("../../src/studentService");

const studentRepository =
    require("../../src/studentRepository");

jest.mock("../../src/studentRepository");

describe("Student Result Service", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("should return PASS when average is 50 or above", () => {

        studentRepository.findStudentById
            .mockReturnValue({
                id: 1,
                name: "Vaishu",
                marks: [80, 70, 90]
            });

        const result =
            studentService.getStudentResult(1);

        expect(result.result)
            .toBe("PASS");

        expect(result.average)
            .toBe(80);
    });

    test("should return FAIL when average is below 50", () => {

        studentRepository.findStudentById
            .mockReturnValue({
                id: 2,
                name: "Priya",
                marks: [40, 45, 35]
            });

        const result =
            studentService.getStudentResult(2);

        expect(result.result)
            .toBe("FAIL");

        expect(result.average)
            .toBe(40);
    });

    test("should throw error when student is not found", () => {

        studentRepository.findStudentById
            .mockReturnValue(undefined);

        expect(() => {
            studentService.getStudentResult(999);
        }).toThrow("Student not found");
    });

    test("should call repository with correct ID", () => {

        studentRepository.findStudentById
            .mockReturnValue({
                id: 1,
                name: "Vaishu",
                marks: [80, 70, 90]
            });

        studentService.getStudentResult(1);

        expect(
            studentRepository.findStudentById
        ).toHaveBeenCalledWith(1);
    });

});
```

------------------------------------------------------------------------

# 45. Jest Output

``` bash
npm run test:jest
```

Output:

``` text
PASS tests/jest/studentService.test.js

Student Result Service
 ✓ should return PASS when average is 50 or above
 ✓ should return FAIL when average is below 50
 ✓ should throw error when student is not found
 ✓ should call repository with correct ID

Test Suites: 1 passed
Tests:       4 passed
```

------------------------------------------------------------------------

# 46. Mocha + Chai Test

`tests/mocha/studentService.test.js`

``` js
const { expect } = require("chai");

const studentService =
    require("../../src/studentService");

const studentRepository =
    require("../../src/studentRepository");

const originalFindStudentById =
    studentRepository.findStudentById;

function mockStudent(student) {

    studentRepository.findStudentById =
        () => student;
}

function restoreRepository() {

    studentRepository.findStudentById =
        originalFindStudentById;
}

describe("Student Result Service", () => {

    afterEach(() => {
        restoreRepository();
    });

    it("should return PASS when average is 50 or above", () => {

        mockStudent({
            id: 1,
            name: "Vaishu",
            marks: [80, 70, 90]
        });

        const result =
            studentService.getStudentResult(1);

        expect(result.result)
            .to.equal("PASS");

        expect(result.average)
            .to.equal(80);
    });

    it("should return FAIL when average is below 50", () => {

        mockStudent({
            id: 2,
            name: "Priya",
            marks: [40, 45, 35]
        });

        const result =
            studentService.getStudentResult(2);

        expect(result.result)
            .to.equal("FAIL");

        expect(result.average)
            .to.equal(40);
    });

    it("should throw error when student is not found", () => {

        mockStudent(undefined);

        expect(() => {
            studentService.getStudentResult(999);
        }).to.throw("Student not found");
    });

    it("should calculate average correctly", () => {

        mockStudent({
            id: 3,
            name: "Kavi",
            marks: [60, 70, 80]
        });

        const result =
            studentService.getStudentResult(3);

        expect(result.average)
            .to.equal(70);
    });

});
```

------------------------------------------------------------------------

# 47. Mocha Output

``` bash
npm run test:mocha
```

Output:

``` text
Student Result Service
  ✓ should return PASS when average is 50 or above
  ✓ should return FAIL when average is below 50
  ✓ should throw error when student is not found
  ✓ should calculate average correctly

4 passing
```

------------------------------------------------------------------------

# 48. Why the POC Uses Mocking

The actual application reads:

``` text
students.json
     ↓
studentRepository
     ↓
studentService
```

But the unit test uses:

``` text
Mock repository
     ↓
studentService
```

For example:

``` js
studentRepository.findStudentById
    .mockReturnValue({
        id: 1,
        name: "Vaishu",
        marks: [80, 70, 90]
    });
```

The test therefore does not depend on the JSON file.

### Technical reason

If the JSON file is unavailable, the unit test can still verify the
business logic.

This is **dependency isolation**.



# 49. Package Configuration

`package.json`

``` json
{
    "name": "unit-testing-poc",
    "version": "1.0.0",
    "scripts": {
        "start": "node src/app.js",
        "test:jest": "jest",
        "test:mocha": "mocha tests/mocha/*.test.js",
        "test": "npm run test:jest && npm run test:mocha"
    },
    "devDependencies": {
        "chai": "^6.0.1",
        "jest": "^30.0.0",
        "mocha": "^11.0.0"
    }
}
```

Install:

``` bash
npm install --save-dev jest mocha chai
```


# 50. Running the POC

``` bash
# Install dependencies
npm install

# Run actual application
npm start

# Run Jest
npm run test:jest

# Run Mocha + Chai
npm run test:mocha

# Run everything
npm test

# Check coverage
npx jest --coverage
```



# 51. Complete POC Flow

``` text
                    STUDENT RESULT SYSTEM
                             │
                             ↓
                     students.json
                             │
                             ↓
                  studentRepository.js
                             │
                             ↓
                    studentService.js
                             │
                             ↓
                   getStudentResult()
                             │
              ┌──────────────┴──────────────┐
              ↓                             ↓
          Real App                      Unit Tests
                                             │
                                  ┌──────────┴──────────┐
                                  ↓                     ↓
                                Jest              Mocha + Chai
                                  │                     │
                               Mocking               Mocking
                                  │                     │
                              Assertions            Assertions
                                  │                     │
                                  └──────────┬──────────┘
                                             ↓
                                      PASS / FAIL
```



# 52. Key Concepts to Remember

  Concept           Technical Purpose
  ----------------- -------------------------------------
  Unit Testing      Verify isolated functionality
  Test Case         Define expected behavior
  Assertion         Compare actual vs expected
  AAA               Structure tests clearly
  Test Suite        Group related tests
  Mock              Replace and control dependency
  Stub              Return predefined data
  Spy               Observe function calls
  Fake              Simplified working dependency
  Fixture           Reusable test data
  Hook              Manage test setup/cleanup
  Edge Test         Verify unusual conditions
  Boundary Test     Verify limit values
  Async Test        Verify asynchronous code
  Coverage          Measure executed code
  Regression Test   Detect broken existing behavior
  TDD               Test before implementation
  BDD               Describe behavior in business terms
  Jest              Integrated JS test framework
  Mocha             Flexible JS test runner
  Chai              Assertion library

Unit testing focuses on **isolating a small unit of functionality and
verifying its behavior with controlled inputs and assertions**.

In the POC:

``` text
students.json
     ↓
Repository
     ↓
Student Service
     ↓
Business Logic
```

The service is tested independently by mocking the repository:

``` text
Mock Repository
       ↓
Student Service
       ↓
Assertions
       ↓
Test Result
```

**Jest** provides an integrated solution containing test execution,
assertions, and mocking. **Mocha** provides the test runner, while
**Chai** provides assertions. **Mocks, stubs, spies, and fakes** are
test doubles used to isolate dependencies. **AAA, fixtures, hooks,
boundary tests, edge cases, asynchronous tests, coverage, TDD, and BDD**
extend the basic testing approach for larger and more maintainable
applications.

The most important principle is:

> **Test the behavior of the unit, isolate its dependencies, and verify
> the expected result.**
