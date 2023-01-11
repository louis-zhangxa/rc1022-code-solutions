/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    for (let i = 0; i <= index; i++) {
      const first = queue.dequeue();
      if (i === index) {
        return first;
      }
      queue.enqueue(first);
    }
  }
}
