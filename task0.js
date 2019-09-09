'use strict';
//идентификаторы
let name = 'Vova';
const year = 2002;
const greeting = (yourName) => console.log(`Hello, ${yourName}`);
greeting('Vova');
greeting(name);
greeting(year);
//циклы
for (let i = 15; i <= 30; i += 2) {
  console.log(i);
}

const range = (start, end) => {
  for (start; start <= end; start += 2) {
    console.log(start);
  }
};
range(15, 30);
//функции
const avarage = (a, b) => { 
  return (a + b) / 2;
};
console.log(avarage(4, 7));
const square = (a) => {
  return a * a;
};
console.log(square(4));
const cube = (a) => {
  return Math.pow(a, 3);
};
console.log(cube(5));

for (let i = 1; i <= 25; i++) {
  console.log(avarage(square(i), cube(i)));
}
//объекты
const cons = 'Barack';

let vari = 'Jenifer';

const obj = {
  name: cons,
};
const obj1 = {
  name: vari,
};

obj.name = 'Nikodim';
obj1.name = 'Agapit';

console.log(obj1.name, obj.name);

const obj2 = {
  city: 'Washigton',
};
vari = obj2;
//cons = obj2;

console.log(obj1, obj);

// Так как cons - это константа,
// при попытке присвоить ей другое значение выдается ошибка.
// При присвоении другого значения в переменную, значение передается,
// но в объекте ничего не меняется, ибо присвоение в объект произошло раньше.

const createUser = (n, c) => {
  const object = {
    name: '',
    city: '',
  };
  object.name = n;
  object.city = c;
  return object;
};
console.log(createUser('Donald', 'Washington'));
//массив
const superArray = [{ name: 'Mao', phone: '+3805454534' },
  { name: 'Kim', phone: '+380543453490' }];

