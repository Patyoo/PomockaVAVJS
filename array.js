//run with node array.js

a = [1, 2, 3];

// Tieto prepisy platia pre funkcie na arrow function

a.forEach((item, index) => {
  console.log(item, index);
});

a.forEach(function (item, index) {
  console.log(item, index);
});
//
for (let i = 0; i < a.length; i++) {
  console.log(a[i], i);
}

for (let item of a) {
  console.log(item);
}

var a = [1, 2, 3, 4, 5];
a[6] = 7; //myslienka - doplni sa <empty item> na indexe 5

console.log(Object.keys(a)); // toto vypise len indexy, ktore su definovane
console.log(a.length);
console.log(a);
a.length = 15;
console.log(a);

var a = [1, 2, 3, 4, 5];
var b = a;
a.pop();
console.log(b); //odstrani sa aj z b, pretoze b je referencou na a

var b = a.slice(); //toto vytvori novu kopiu pola a
a.pop();
console.log(b); //toto uz neodstrani z b, pretoze b je novym polom
