var colors = ['red', 'white', 'blue'];
console.log('values of color [0]', colors[0]);
console.log('values of color [1]', colors[1]);
console.log('values of color [2]', colors[2]);

var America = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(America);

colors[2] = 'green';
var mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(mexico);
console.log('value of colors:', colors);

var students = ['Jacob', 'Anna', 'Mary', 'Louis'];
var numberOfStudents = students.length;
console.log('there are', numberOfStudents, 'students in the class.');

var lastIndex = students[numberOfStudents - 1];
var lastStudent = lastIndex;
console.log('the last student in the array is', lastStudent);
console.log('value of students', students);
