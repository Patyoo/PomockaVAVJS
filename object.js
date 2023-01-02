// var a = new Object({ key: 'value' });
// console.log(a);
// var a = { key: 'value' };
// console.log(a);

// var b = Object.create(a);
// console.log(b); // vypise {}
// console.log(b.key); // vypise value

var User = function ({ name, password, email, score, level }) {
  this.name = name ? name : null;
  this.password = password ? password : null;
  this.email = email ? email : null;
  this.level = level ? level : null;
  this.score = score ? score : null;
  this.sayHello = function () {
    console.log('Hello');
  };
};

//es6
// class User {
//   constructor({ name, password, email, score, level }) {
//     this.name = name ? name : null;
//     this.password = password ? password : null;
//     this.email = email ? email : null;
//     this.level = level ? level : null;
//     this.score = score ? score : null;
//   }
//   sayHello() {
//     console.log('Hello');
//   }
// }

var us = new User({ name: 'Jose', password: '12345' });

User.prototype.hashName = function () {
  const crypto = require('crypto');
  return crypto.createHash('md5').update(this.name).digest('hex');
};

//add new property to object with prototype
User.prototype.newName = 'New Name';

for (var key in us) {
  console.log(key);
} //toto vypise property aj metody, ktore su v prototype

console.log(Object.keys(us)); //toto vypise len vlastnosti objektu

// pri classes s es6 sa nevypisu metody vnutri classe-  ani v keys ani s for in keys
