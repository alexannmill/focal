const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const result = grades.filter(grade => grade >= 70);
console.log(result);

console.log(grades.filter(grade => grade >= 70));

const passGrades = grade => grade >= 70;

console.log(grades.filter(passGrades));