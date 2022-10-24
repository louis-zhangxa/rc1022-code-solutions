/* exported toObject */
function toObject(keyValuePair) {
  var obj = {}; // set an empty object for result
  obj[keyValuePair[0]] = keyValuePair[1]; // make the property and value into the object
  return obj;
}
