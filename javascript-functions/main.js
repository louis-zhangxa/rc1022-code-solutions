function convertMinutesToSeconds(minutes) {
  var second = minutes * 60;
  return second;
}

function greet(name) {
  var greeting = '"Hey, ' + name + '"';
  return greeting;
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  var firstName = '"' + person.firstName + '"';
  return firstName;
}

function getLastElement(array) {
  var LastElement = array[array.length - 1];
  return LastElement;
}

var second = convertMinutesToSeconds(5);
console.log('the vaule of second is', second);

var Hey = greet('Beavis');
console.log('the value of Hey is ', Hey);

var area = getArea(17, 42);
console.log('the value of area is', area);

var lastName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('the value of lastName is', lastName);

var lastone = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('the value of lastone is', lastone);
