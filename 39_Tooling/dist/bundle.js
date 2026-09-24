(() => {
  // src/calculator.js
  function calculateAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
  }

  // src/app.js
  var student = {
    name: "Vaishu",
    marks: [85, 90, 88]
  };
  var average = calculateAverage(student.marks);
  console.log(`Student: ${student.name}`);
  console.log(`Average: ${average}`);
})();
