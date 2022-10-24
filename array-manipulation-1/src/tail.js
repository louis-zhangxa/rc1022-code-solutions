/* exported tail */
/*
// a new array for values
// loop through array after first item
// push the value to new arry */
function tail(array) {
  var list = [];
  for (var i = 1; i < array.length; i++) {
    list.push(array[i]);
  }
  return list;
}
