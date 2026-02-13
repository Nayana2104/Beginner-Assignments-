// Assignment 1 12/02/2026
const students = [ 
    {name: "Nani", score:[70,60,80,85]},
    {name: "Kiran", score:[90,95,96,99]},
    {name: "Vinuth", score:[85,88,89,90]},
    {name: "Rahul", score:[50,55,60,90]},
    {name: "Rithvik", score:[90,85,50,60]},
];
// calculate averages and assign grades
function calculateGrades(avg) {
    if (avg >= 90) {
        return 'A';
    } else if (avg >= 80) {
        return 'B';
    }   else if (avg >= 70) {
        return 'C';
    } else if (avg >= 60) {
        return 'D';
    } else {
        return 'Fail';
    }   
}
students.forEach(student => {
    const total = student.score.reduce((acc, curr) => acc + curr, 0);
    const average = total / student.score.length;
    student.average = average;
    student.grade = calculateGrades(average);
});

console.log(students);

// find top 3 students 
const topStudents = students.sort((a, b) => b.average - a.average)
.slice(0, 3);
console.log("Top 3 Students:");
topStudents.forEach(student => {   
     console.log(`${student.name}: Average = ${student.average.toFixed(2)}, Grade = ${student.grade}`);
}   );

// calculate class average
const classAverage = students.reduce((acc, student) => acc + student.average, 0) / students.length;
console.log(`Class Average: ${classAverage.toFixed(2)}`);

//group students by grade
const gradeGroups = students.reduce((groups, student) => {    
    if (!groups[student.grade]) {
        groups[student.grade] = [];
    }    groups[student.grade].push(student);
    return groups;
}, {});

console.log("Students Grouped by Grade:");
for (const grade in gradeGroups) {    console.log(`Grade ${grade}:`);
    gradeGroups[grade].forEach(student => {        console.log(`  ${student.name}: Average = ${student.average.toFixed(2)}`);
    });}


