function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var value = new ExampleConstructor('las', 'rifa');
console.log(value);

var check = (value instanceof ExampleConstructor);
console.log(check);
