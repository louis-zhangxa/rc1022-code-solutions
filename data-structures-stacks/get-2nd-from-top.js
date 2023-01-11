/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.print() === 'Stack { <empty> }') {
    return undefined;
  } else {
    const first = stack.pop();
    const second = stack.pop();
    if (second === undefined) {
      stack.push(first);
      return undefined;
    }
    stack.push(second);
    stack.push(first);
    return second;
  }
}
