const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((sum, currentnum) => sum + currentnum);
console.log(sum);

const product = numbers.reduce((sum, currentnum) => sum * currentnum);
console.log(product);

const balance = account.reduce((balance, currentTrans) => {
  if (currentTrans.type === 'deposit') {
    balance.amount += currentTrans.amount;
  } else if (currentTrans.type === 'withdrawal') {
    balance.amount -= currentTrans.amount;
  }
  return balance;
});

console.log(balance.amount);

const composite = traits.reduce((returns, key) => Object.assign(returns, key));
console.log(composite);
