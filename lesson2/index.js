const calculateResultSum = require('./calculateResultSum');
require('colors')



const total = calculateResultSum.calculateResultSum([12.1, 32.2, 4.1], 0.9)
// console.log('Стоимость ' + total);

const resultText = `Общая стоимость ${total}`
console.log(total>50 ? resultText.red: resultText.green);
