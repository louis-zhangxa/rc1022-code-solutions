/* exported getKeys */
function getKeys(object) {
  var list = []; // set empty array for the result
  for (var i in object) { // a for in loop to loop through object
    list.push(i); // push the key to list array
  }
  return list; // return the list of the object's property keys.
}
