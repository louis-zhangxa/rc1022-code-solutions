/* exported initial */
/*
a new array for values
loop through array before last item
push the value to new arry */
function initial(array) {
  var list = [];
  for (var i = 0; i < array.length - 1; i++) {
    list.push(array[i]);
  }
  return list;
}
