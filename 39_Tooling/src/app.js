import { calculateAverage } from "./calculator.js";

const student = {
  name: "Vaishu",
  marks: [85, 90, 88],
};

const average = calculateAverage(student.marks);

console.log(`Student: ${student.name}`);
console.log(`Average: ${average}`);
