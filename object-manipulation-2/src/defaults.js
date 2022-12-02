/* exported defaults */
/*
loop through all the proprety in source object
if target object doesn't have this key, make this key in target object and assign the value of source.key to it
return target object */
function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
