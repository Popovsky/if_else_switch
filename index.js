//  Работа с if-else

const initialValueA = prompt('Enter a');
const initialValueB = prompt('Enter b');
let a = Number(initialValueA);
let b = Number(initialValueB);

//  1   ----------------------

if (a) {
    console.log('Неверно');
} else console.log('Верно');

//  2   ----------------------

if (a > 0) {
    console.log('Верно');
} else console.log('Неверно');

//  3   ----------------------

if (a < 0) {
    console.log('Верно');
} else console.log('Неверно');

//  4   ----------------------

if (a >= 0) {
    console.log('Верно');
} else console.log('Неверно');

//  5   ----------------------

if (a <= 0) {
    console.log('Верно');
} else console.log('Неверно');

//  6   ----------------------

if (a) {
    console.log('Верно');
} else console.log('Неверно');

//  --------------------------

a = String(initialValueA);

//  7   ----------------------

if (a === 'test') {
    console.log('Верно');
} else console.log('Неверно');

//  8   ----------------------

if (a === '1') {
    console.log('Верно');
} else console.log('Неверно');

//  Работа с логическими переменными

const test = Boolean(initialValueA);

//  1   ----------------------

if (test) {
    console.log('Верно');
} else console.log('Неверно');

console.log(test ? 'Верно' : 'Неверно');

//  2   ----------------------

if (!test) {
    console.log('Верно');
} else console.log('Неверно');

console.log(!test ? 'Верно' : 'Неверно');

//  Работа с && (и) и || (или)

a = Number(initialValueA);

//  1   ----------------------

if (a > 0 && a < 5) {
    console.log('Верно');
} else console.log('Неверно');

//  2   ----------------------

let newA = a;
if (!newA || newA === 2) {
    console.log(newA += 7);
} else console.log(newA /= 10);

//  3   ----------------------

if (a <= 1 && b >= 3) {
    console.log(a + b);
} else console.log(a - b);

//  4   ----------------------

if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно');
} else console.log('Неверно');

//  На switch-case

const num = initialValueA;

//  1   ----------------------

let result;

switch (num) {
    case '1':
        result = 'зима';
        break;
    case '2':
        result = 'весна';
        break;
    case '3':
        result = 'лето';
        break;
    case '4':
        result = 'осень';
        break;
    default:
        result = 'default';
}

console.log(result);

//  2   Задачи
//  3   ----------------------

const day = Math.ceil(Math.random() * 31);
let decade;

if (day < 11) {
    decade = 1;
} else if (day > 10 && day < 21) {
    decade = 2;
} else decade = 3;

console.log(decade);

//  4   ----------------------

const month = Math.ceil(Math.random() * 12);
let season;

if (month < 3 || month > 11) {
    season = 'зима';
} else if (month > 2 && month < 6) {
    season = 'весна';
} else if (month > 5 && month < 9) {
    season = 'лето';
} else season = 'осень';

console.log(season);

//  5   -----------------------

const initialString = 'abcde';
const arrString = initialString.split('');

console.log(arrString[0] === 'a' ? 'да' : 'нет');

//  6   -----------------------

const initialStringOfNumbers = '12345';
const arrStringOfNumbers = initialStringOfNumbers.split('');

console.log(arrStringOfNumbers[0] < 4 ? 'да' : 'нет');

//  7   -----------------------

const initialStringOfNumbersForTask7 = '123';
const arrStringOfNumbersForTask7 = initialStringOfNumbersForTask7.split('').map(el => Number(el));

console.log(arrStringOfNumbersForTask7.reduce((acc, el) => acc + el, 0));

//  8   -----------------------

const initialStringOfNumbersForTask8 = '123006';
const arrStringOfNumbersForTask8 = initialStringOfNumbersForTask8.split('').map(el => Number(el));
const arrOfFirstThreeNumbers = [];
const arrOfSecondThreeNumbers = [];
arrStringOfNumbersForTask8.map((el, i) => arrStringOfNumbersForTask8.length / 2 > i
    ?
    arrOfFirstThreeNumbers.push(el)
    :
    arrOfSecondThreeNumbers.push(el));
const firstThreeNumbers = arrOfFirstThreeNumbers.reduce((acc, el) => acc + el, 0);
const secondThreeNumbers = arrOfSecondThreeNumbers.reduce((acc, el) => acc + el, 0);

console.log(firstThreeNumbers === secondThreeNumbers ? 'да' : 'нет');
