/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstPop = stack.pop();
  if (firstPop === undefined) {
    return undefined;
  } else {
    stack.push(firstPop);
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
