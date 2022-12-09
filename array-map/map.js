const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function map(array, transform) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(transform(array[i]));
  }
  return output;
}

function double(num) {
  return num * 2;
}

function priceEach(num) {
  return `$${num.toFixed(2)}`;
}

const doubled = map(numbers, double);
console.log(doubled);

const prices = map(numbers, priceEach);
console.log(prices);
