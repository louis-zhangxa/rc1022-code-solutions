/* exported countValues */

function countValues(stack) {
  const firstPop = stack.pop();
  if (firstPop === undefined) {
    return 0;
  } else {
    stack.push(firstPop);
    for (let i = 0; i < 10; i++) {
      if (stack.pop() === undefined) {
        return i;
      }
    }
  }
}
