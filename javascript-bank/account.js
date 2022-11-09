/* exported Account */
function Account(number, holder, transactions) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (withdrawal) {
  if (Number.isInteger(withdrawal) && withdrawal > 0) {
    var transaction = new Transaction('withdrawal', withdrawal);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var deposit = 0;
    var withdrawal = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        deposit += this.transactions[i].amount;
      } else if (this.transactions[i].type === 'withdrawal') {
        withdrawal += this.transactions[i].amount;
      }
    }
    var balance = deposit - withdrawal;
    return balance;
  }
};
