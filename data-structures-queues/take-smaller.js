/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    const second = queue.dequeue();
    if (second === undefined) {
      return first;
    } else {
      if (first < second) {
        queue.enqueue(second);
        return first;
      } else if (first === second) {
        queue.enqueue(first);
        return first;
      } else {
        queue.enqueue(first);
        return second;
      }
    }
  }
}
