/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() !== undefined) {
    for (let i = 0; i < 10; i++) {
      const num = queue.dequeue();
      const num2 = queue.peek();
      if (num2 === undefined) {
        return num;
      } else {
        if (num <= num2) {
          return num;
        } else if (num > num2) {
          queue.enqueue(num);
          if (num <= num2) {
            queue.dequeue(num);
          }
        }
      }
    }
  }
}
