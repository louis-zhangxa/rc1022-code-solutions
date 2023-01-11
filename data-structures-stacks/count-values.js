/* exported countValues */

function countValues(stack) {
  if (stack.print() === 'Stack { <empty> }') {
    return 0;
  } else {
    for (let i = 0; i < 10; i++) {
      if (stack.pop() === undefined) {
        return i;
      }
    }
  }
}
