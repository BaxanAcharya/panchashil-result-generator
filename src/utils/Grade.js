export const grade = (mark, total) => {
  const percentage = (mark / total) * 100;
  console.log(percentage);

  if (percentage >= 90) {
    return "A+ /4";
  } else if (percentage >= 80) {
    return "A /3.6";
  } else if (percentage >= 70) {
    return "B+ /3.2";
  } else if (percentage >= 60) {
    return "B /2.8";
  } else if (percentage >= 50) {
    return "C+ /2.4";
  } else if (mark >= 40) {
    return "C /2.0";
  } else if (percentage >= 20) {
    return "D+ /1.6";
  } else if (percentage >= 1) {
    console.log("E");
    return "E /1.2";
  } else {
    return "Not Applicable/ 0";
  }
};
