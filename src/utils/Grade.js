export const grade = (mark, total) => {
  const percentage = (mark / total) * 100;

  if (percentage >= 90 && percentage <= 100) {
    return "A+ /4";
  } else if (percentage >= 80 && percentage <= 89.9) {
    return "A /3.6";
  } else if (percentage >= 70 && percentage <= 79.9) {
    return "B+ /3.2";
  } else if (percentage >= 60 && percentage <= 69.9) {
    return "B /2.8";
  } else if (percentage >= 50 && percentage <= 59.9) {
    return "C+ /2.4";
  } else if (mark >= 40 && mark <= 49.9) {
    return "C /2.0";
  } else if (percentage >= 20 && percentage <= 39.9) {
    return "D /1.6";
  } else if (percentage >= 1 && percentage <= 19.9) {
    return "E /1.2";
  } else {
    return "Not Applicable/ 0";
  }
};
