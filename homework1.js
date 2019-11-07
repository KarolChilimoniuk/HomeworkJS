// Exercise 1

/* let years = [1974, 1900, 1985, 2000];
let leapYear = [];

for (let i = 0; i < years.length; i++) {
  if (((years[i] % 4 === 0 && years[i] % 100 !== 0) || (years[i] % 100 === 0 && years[i] % 400 === 0))) {
    console.log(years[i]); // wynik da 2000
    leapYear.push(years[i]);
  }
};
console.log(leapYear); */

// Excercise 2

/* let sum = 1;
let i = 1;
while (i <= 7) {
  sum *= i;
  console.log(sum)
  i++;
}; */

// Exercise 3

/* let digits = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum = 0;
for (let i = 0; i < digits.length; i++) {
  if (digits[i] % 2 !== 0) {
    sum = digits[i] + sum;
  }
};
console.log(sum); */

// Exercise 4

/* let digits = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let max = digits[0];
let min = digits[0];

for (i = 0; i < digits.length; i++) {
  if (digits[i] > max) {
    max = digits[i];
  } else if (digits[i] < min) {
    min = digits[i];
  }
};
console.log(min);
console.log(max); */

//Exercise 5 

/* let names = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];

let longestString = '';
for (let i = 0; i < names.length; i++) {
  if (names[i].length > longestString.length) {
    longestString = names[i];
  }
};
console.log(longestString); */


// Exercise 6

/* let digits = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let highestDigit = 0;
let indexes = [];


for (let i = 0; i < digits.length; i++) {
  if (digits[i] > highestDigit) {
    highestDigit = digits[i];
    indexes.push(i);
    indexes = [];
    if (digits[i] == highestDigit) {
      indexes.push(i);
    }
  } else if (digits[i] == highestDigit) {
    indexes.push(i);
  }
};

// for (let i = 0; i < digits.length; i++) {
//   if (digits[i] >= highestDigit) {
//     highestDigit = digits[i];
//   }
// };
// for (let i = 0; i < digits.length; i++) {
//   if (digits[i] == highestDigit) {
//     indexes.push(i);
//   } // to było pierwsze rozwiązanie z dwiema pętlami
// };
console.log(indexes); */

//Exercise 7

/* let digits = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let evenSum = 0;
let evenAverage = 0;
let evenArray = [];

for (let i = 0; i < digits.length; i++) {
  if (digits[i] % 2 === 0) {
    evenSum = evenSum + digits[i];
    evenArray.push(digits[i]);
  };
  if (i == digits.length - 1) {
    let arrayLength = evenArray.length;
    evenAverage = evenSum / arrayLength;
    // console.log(evenSum);
    // console.log(arrayLength);
    // console.log(evenArray);
    console.log(evenAverage);
  }
}; */

//Exercise 8

/* let digits = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum = 0;
let arrayLength = digits.length;
let evenIndex = [];
let evenAverage = 0;

for (let i = 1; i < arrayLength; i++) { // zamiast i++ to += 2 wtedy krótszy kod
  if (i % 2 == 0) {
    sum = sum + digits[i];
    evenIndex.push(digits[i]);
  }
  if (i == arrayLength - 1) {
    let evenLength = evenIndex.length;
    evenAverage = sum / evenLength;
    console.log(evenAverage);
  }
};
console.log(evenIndex); */
// średnia wartość elementów, które są na parzystych indexach

//Exercise 9

/* let digits = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum = 0;
/* let even = [];
for (let i = 0; i < digits.length; i++) {
  if (digits[i] % 2 == 0) {
    sum += digits[i];
  } else {
    sum -= digits[i];
  }
};
console.log(sum); */