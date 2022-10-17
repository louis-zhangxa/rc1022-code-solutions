var student = {
  firstName: 'Louis',
  lastName: 'Zhang',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'driver';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'BMW',
  modle: 'M3',
  year: 2023
};

vehicle['color'] = 'green';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'pudding',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
