/* exported Bank */
function Bank(nextAccountNumber, accounts) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    var currentAccountNumber = this.nextAccountNumber - 1;
    return currentAccountNumber;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  if (this.accounts[number] !== undefined) {
    return this.accounts[number];
  } else {
    return null;
  }
};

// Bank.prototype.getTotalAssets = function () {
//   if (this.accounts.length === 0) {
//     return 0;
//   } else {
//     var totalAssets = 0;

//   }
// };
