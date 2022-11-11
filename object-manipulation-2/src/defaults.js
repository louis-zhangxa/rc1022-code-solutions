/* exported defaults */
/* list all the proprety in source object
list all the proprety in target object
loop through all the proprety in source object
if is not same, update to target
return target object */
function defaults(target, source) {
  var keys = Object.keys(source);
  var key = Object.keys(target);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] !== key[i]) {
      target[keys[i]] = source[keys[i]];
    }
  }
  return target;
}
