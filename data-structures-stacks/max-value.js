/* exported maxValue */

function maxValue(stack) {
  if (stack.print() === 'Stack { <empty> }') {
    return -Infinity;
  } else {
    let bigNum = -Infinity;
    for (let i = 0; i < 10; i++) {
      const s = stack.pop();
      if (s > bigNum) {
        bigNum = s;
      }
    }
    return bigNum;
  }
}
