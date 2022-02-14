export const grade = (mark, total) => {
  const percentage = (mark / total) * 100;
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80) {
    return "A";
  } else if (percentage >= 70) {
    return "B+";
  } else if (percentage >= 60) {
    return "B";
  } else if (percentage >= 50) {
    return "C+";
  } else if (mark >= 40) {
    return "C";
  } else if (percentage >= 20) {
    return "D+";
  } else if (percentage >= 1) {
    return "E";
  } else {
    return "Not Applicable";
  }
};

export const Gpa = (mark, total) => {
  const percentage = (mark / total) * 100;
  if (percentage >= 90) {
    return "4";
  } else if (percentage >= 80) {
    return "3.6";
  } else if (percentage >= 70) {
    return "3.2";
  } else if (percentage >= 60) {
    return "2.8";
  } else if (percentage >= 50) {
    return "2.4";
  } else if (mark >= 40) {
    return "2.0";
  } else if (percentage >= 20) {
    return "1.6";
  } else if (percentage >= 1) {
    console.log("E");
    return "1.2";
  } else {
    return "0";
  }
};
