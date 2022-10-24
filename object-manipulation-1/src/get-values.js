/* exported getValues */
function getValues(object) {
  var list = []; // set empty array for the result
  for (var i in object) { // a for in loop to loop through object
    list.push(object[i]); // push object's property values to array
  }
  return list;
}
