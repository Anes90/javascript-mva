let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
};

let newCar = Object.create(originalCar);
/* console.log(newCar.make);
newCar.make = 'audi';
console.log(newCar.make); */
console.log(newCar.whatever);
/* console.log(newCar);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

originalCar.door = 4;
console.log(newCar.door);

console.log(originalCar.hasOwnProperty('door'));
console.log(newCar.hasOwnProperty('door')); */