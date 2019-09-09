'use strict';
// 1) Поднятие

const raising = () => {
  const MY_NAME = 'Vova';
  console.log('Hello ' + MY_NAME);
};
raising();
//2) Скалярные и Ссылочные типы данных
const a = 5;
const b = inc(a);
function inc(constant) {
  return ++constant;
}
console.dir({ a, b });


const Num = {
  n: 5,
};
const obj = {
  n: inc2(Num.n),
};
function inc2(number) {
  return ++number;
}
console.dir({ obj });

//3) Типы объектов

const array = [1, undefined, 'Holand', true, 546,
  'Trump',  false, 45, 'something', 78, -34, 'punishment',
  undefined, 65.56, true, 'qwerty', 'tgvt', 1223];
const typeCounter = {
  undefined: 0,
  boolean: 0,
  number: 0,
  string: 0,
};
for (const i of array) {
  typeCounter[typeof(i)]++;
}
console.log(typeCounter);

/*
for (const i in array) {
  newTypeCounter[typeof(i)] = 0;
  newTypeCounter[typeof(i)]++;
}
console.log(newTypeCounter);
*/


