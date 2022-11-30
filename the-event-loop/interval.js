let number = 3;
const timer = setInterval(() => {
  console.log(number--);
  if (number === 0) {
    console.log('Blast off!');
    clearInterval(timer);
  }
}, 1000);
