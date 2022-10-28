var book = [
  {
    bookName: 'Adult',
    bookAuthor: 'lari',
    isbn: '1234323432'
  },
  {
    bookName: 'Youth',
    bookAuthor: 'bifa',
    isbn: '9876543567890'
  },
  {
    bookName: 'older',
    bookAuthor: 'asi',
    isbn: '98765456'
  }
];

console.log('array of books:', book);
console.log('type of book array:', typeof book);

var demo = JSON.stringify(book);
console.log(demo, 'type of demo:', typeof demo);

var handinput = '{"Number id": "louis", "String name": "1"}';
console.log(handinput, 'typeof handinput:', typeof handinput);

var obj = JSON.parse(handinput);
console.log(obj);
console.log('typeof obj:', typeof obj);
