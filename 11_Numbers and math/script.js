const nameInput = document.getElementById("name");

const mark1Input = document.getElementById("mark1");
const mark2Input = document.getElementById("mark2");
const mark3Input = document.getElementById("mark3");

const totalFeeInput = document.getElementById("totalFee");
const paidFeeInput = document.getElementById("paidFee");

const calculateBtn =
    document.getElementById("calculateBtn");

const result =
    document.getElementById("result");


calculateBtn.addEventListener("click", generateReport);


function generateReport() {

    // =====================================
    // 1. Get and convert input values
    // =====================================

    const name = nameInput.value.trim();

    const mark1 = Number(mark1Input.value);
    const mark2 = Number(mark2Input.value);
    const mark3 = Number(mark3Input.value);

    const totalFee = Number(totalFeeInput.value);
    const paidFee = Number(paidFeeInput.value);


    // =====================================
    // 2. Validate numbers
    // =====================================

    if (
        Number.isNaN(mark1) ||
        Number.isNaN(mark2) ||
        Number.isNaN(mark3)
    ) {
        alert("Enter valid marks");
        return;
    }


    if (
        !Number.isFinite(totalFee) ||
        !Number.isFinite(paidFee)
    ) {
        alert("Enter valid fee values");
        return;
    }


    if (
        !Number.isInteger(mark1) ||
        !Number.isInteger(mark2) ||
        !Number.isInteger(mark3)
    ) {
        alert("Marks must be whole numbers");
        return;
    }


    // =====================================
    // 3. Validate mark range
    // =====================================

    if (
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100
    ) {
        alert("Marks must be between 0 and 100");
        return;
    }


    // =====================================
    // 4. Calculate total
    // =====================================

    const total =
        mark1 + mark2 + mark3;


    // =====================================
    // 5. Calculate average
    // =====================================

    const average =
        total / 3;


    // =====================================
    // 6. Calculate percentage
    // =====================================

    const percentage =
        (total / 300) * 100;


    // =====================================
    // 7. Round values
    // =====================================

    const roundedAverage =
        Math.round(average);

    const floorAverage =
        Math.floor(average);

    const ceilingAverage =
        Math.ceil(average);


    // =====================================
    // 8. Find highest and lowest marks
    // =====================================

    const highestMark =
        Math.max(mark1, mark2, mark3);

    const lowestMark =
        Math.min(mark1, mark2, mark3);


    // =====================================
    // 9. Calculate fee balance
    // =====================================

    const balance =
        totalFee - paidFee;


    // =====================================
    // 10. Absolute difference
    // =====================================

    const feeDifference =
        Math.abs(balance);


    // =====================================
    // 11. Determine grade
    // =====================================

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }


    // =====================================
    // 12. Pass / Fail
    // =====================================

    const status =
        percentage >= 40
            ? "PASS"
            : "FAIL";


    // =====================================
    // 13. Math.pow()
    // =====================================

    const performanceScore =
        Math.pow(percentage / 100, 2);


    // =====================================
    // 14. Math.sqrt()
    // =====================================

    const scoreRoot =
        Math.sqrt(total);


    // =====================================
    // 15. Random student reference
    // =====================================

    const randomNumber =
        Math.floor(Math.random() * 9000) + 1000;

    const studentReference =
        `STU-${randomNumber}`;


    // =====================================
    // 16. Format decimal values
    // =====================================

    const formattedAverage =
        average.toFixed(2);

    const formattedPercentage =
        percentage.toFixed(2);

    const formattedBalance =
        balance.toFixed(2);


    // =====================================
    // 17. Display report
    // =====================================

    result.textContent = `

Student Performance Report
===========================

Student Name:
${name}

Student Reference:
${studentReference}


MARKS
-----

Subject 1: ${mark1}
Subject 2: ${mark2}
Subject 3: ${mark3}

Total:
${total} / 300

Average:
${formattedAverage}

Percentage:
${formattedPercentage}%


PERFORMANCE
-----------

Highest Mark:
${highestMark}

Lowest Mark:
${lowestMark}

Rounded Average:
${roundedAverage}

Floor Average:
${floorAverage}

Ceiling Average:
${ceilingAverage}

Grade:
${grade}

Status:
${status}


FEE DETAILS
-----------

Total Fee:
₹${totalFee.toFixed(2)}

Paid Fee:
₹${paidFee.toFixed(2)}

Balance:
₹${formattedBalance}

Absolute Difference:
₹${feeDifference.toFixed(2)}


MATH CALCULATIONS
-----------------

Performance Score:
${performanceScore.toFixed(4)}

Square Root of Total:
${scoreRoot.toFixed(2)}
`;
}