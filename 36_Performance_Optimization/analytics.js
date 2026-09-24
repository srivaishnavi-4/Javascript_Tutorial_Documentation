// analytics.js

export function calculateAverage(students) {

    let total = 0;

    let count = 0;

    for (const student of students) {

        for (const mark of student.marks) {

            total += mark;

            count++;
        }
    }

    return total / count;
}