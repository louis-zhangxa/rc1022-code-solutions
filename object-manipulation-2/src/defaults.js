/* exported defaults */
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
