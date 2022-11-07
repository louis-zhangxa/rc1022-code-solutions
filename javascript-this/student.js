/* exported student */
var student = {
  firstName: 'Louis',
  lastName: 'Zhang',
  subject: 'JavaScript',
  getFullName: function (firstName, lastName) {
    return this.firstName + ' ' + this.lastName;
  },

  getIntroduction: function (firstName, lastName, subject) {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
