/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.print() !== 'Stack { <empty> }') {
    const firstNum = stack.pop();
    stack.push(value);
    stack.push(firstNum);
    return stack.print();
  }
}
