const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function mapse(array, transform) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(transform(array[i]));
  }
  return output;
}

const doubled = mapse(numbers, num => num * 2);
console.log(doubled);

const prices = mapse(numbers, num => {
  return `$${num.toFixed(2)}`;
});
console.log(prices);
