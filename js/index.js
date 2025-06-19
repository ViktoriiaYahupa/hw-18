// 1. Output the numbers from 20 to 30 through a gap,
// using a step of 0.5 (20 20.5 21 21.5….).

let str = '';
for (let i = 20; i <= 30; i += 0.5) {
  str += `${i} `;
}
console.log(`Рядок чисел від 10 до 20: ${str}`);

//* ******************************************************************************
// 2. One dollar costs 27 UAH.
// Output the data with the calculation of the cost of 10, 20, 30... 100 dollars.
const exchangeRate = 27;
for (let d = 10; d <= 100; d += 10) {
  const dollarCoast = exchangeRate * d;
  console.log(`coast of ${d} dollars = ${exchangeRate} * ${d} = ${dollarCoast} UAH`);
}

//* *******************************************************************************
// 3. Given an integer.
// You need to print all integers from 1 to 100 whose square does not exceed N.

const integerN = 11;

const minInteger = 1;
const maxInteger = 100;
for (let e = minInteger; e <= maxInteger; e += 1) {
  if ((e * e) <= integerN) {
    console.log(e);
  }
}

//* **********************************************************************************
// 4. Given an integer. Find out if it is prime (a prime number is a number greater than 1
// and that has no other divisors than 1 and itself).

const someInteger = 7;

let countDevisors = 0;

for (let p = 1; p <= someInteger; p += 1) {
  if (someInteger % p === 0) {
    countDevisors += 1;
  }
}

if (countDevisors === 2) {
  console.log(`${someInteger} просте число`);
} else {
  console.log(`${someInteger} не є простим число`);
}

//* **************************************************************************************
// 5. Given a certain number.
// Determine whether this number can be obtained by raising the number 3 to a certain power.
// (For example, the numbers 9, 81 can be obtained, but 13 cannot.)

const certainNumber = 13;
let foundCertainNumber = false;

for (let power = 0; power < certainNumber; power += 1) {
  if (3 ** power === certainNumber) {
    foundCertainNumber = true;
    console.log(`можна одержати число ${certainNumber} через піднесення 3 до степеня ${power}`);
    break;
  }
}
if (!foundCertainNumber) {
  console.log(`не можливо одержати ${certainNumber} через піднесення 3 до певного степеня`);
}
