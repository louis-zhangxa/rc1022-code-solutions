const add = require('./add');
const substract = require('./substract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'add') {
  console.log('result:', add(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'minus') {
  console.log('result:', substract(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'times') {
  console.log('result:', multiply(Number(process.argv[2]), Number(process.argv[4])));
} else if (process.argv[3] === 'divide') {
  console.log('result:', divide(Number(process.argv[2]), Number(process.argv[4])));
} else {
  console.log('Invalid Expression');
}
