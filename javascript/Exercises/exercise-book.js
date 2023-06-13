function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    console.log(title, " by ", author, ", ", pages, " pages");
  };
}

const theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", 295, false);
theHobbit.info();

const check = Object.getPrototypeOf(theHobbit) === Books.prototype;
console.log(check);
console.log(Object.getPrototypeOf(theHobbit));
console.log(theHobbit.valueOf());
// console.log(theHobbit.getPrototypeOf());

let y = new Array();

console.log(Object.getPrototypeOf(y));

console.log(y instanceof Array);
