/* exported calculator */
var calculator = {
  add(x, y) {
    var sum = x + y;
    return sum;
  },

  subtract(x, y) {
    var sum = x - y;
    return sum;
  },

  multiply(x, y) {
    var sum = x * y;
    return sum;
  },

  divide(x, y) {
    var sum = x / y;
    return sum;
  },

  square(x) {
    var sum = x * x;
    return sum;
  },

  sumAll(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
    return sum;
  },

  getAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
    sum = sum / numbers.length;
    return sum;
  }
};
