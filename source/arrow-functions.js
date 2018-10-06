/* let hi = () => { console.log('howdy'); }

hi(); */

/* let hi = (name) => { console.log(`howdie ${ name }`); };
hi('bob'); */

/* let add = (a, b) => {return a + b};
console.log(add(7, 3)); */

/* let names = ['david', 'eddie', 'alex', 'michael'];
names.map((name) => {console.log(`howdie ${ name }!`)}); */

/* let names = ['david', 'eddie', 'alex', 'michael'];
let i = 0;
names.map((name) => {i++; console.log(`howdie ${ name } ${ i }!`)}); */

let names = ['david', 'eddie', 'alex', 'michael'];
var transformed = names.map((name) => {return `howdie ${ name }!`});
console.log(transformed);