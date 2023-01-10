/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const first = stack.pop();
    const second = stack.peek();
    if (second === undefined) {
      stack.push(first);
      return undefined;
    }
    stack.push(first);
    return second;
  }
}
