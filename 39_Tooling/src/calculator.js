// Separate module for calculation

export function calculateAverage(marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);

  return total / marks.length;
}
