// zadanie 1

// const numbers = Array.from(Array(100), (el, i) => {
//   return i + 1;
// });

// const findPrimeNumbers = num => {
//   const primeNumbers = num.filter((el, i, arr) => {
//     const divideResult = [];
//     for (let j = 0; j < num.length; j++) {
//       el % num[j] === 0 ? divideResult.push(el) : null;
//     }
//     return divideResult.length === 2 ? el : null;
//   });
//   return primeNumbers;
// };

// console.log(findPrimeNumbers(numbers));

// zadanie 2 ---- wersja bez html

// const numbers = Array.from(Array(100), (el, i) => {
//   return i + 1;
// });
// const numberToGuess = numbers[Math.floor(Math.random() * numbers.length)];
// const guessCounter = [];

// const guessNumber = numbers => {
//   const copyNumbers = [...numbers];
//   let i = 0;
//   while (i < numbers.length) {
//     let number = copyNumbers[Math.floor(Math.random() * copyNumbers.length)];
//     if (number !== numberToGuess) {
//       copyNumbers.splice(copyNumbers.indexOf(number), 1);
//       !guessCounter.includes(number) ? guessCounter.push(number) : null;
//       number > numberToGuess
//         ? console.log(`Podana przez ciebie cyfra jest zbyt duża`)
//         : console.log(`Podana przez ciebie cyfra jest zbyt mała`);
//     } else {
//       !guessCounter.includes(number) ? guessCounter.push(number) : null;
//       return `Odgadłeś cyfrę! Jest to ${number}. Liczba podjętych prób to: ${guessCounter.length}`;
//     }
//     i++;
//   }
// };

// console.log(numberToGuess);
// console.log(guessNumber(numbers));

// zadanie 2 ---- wersja z html

// const numberInput = document.querySelector(".number--input");
// const attemptsList = document.querySelector(".attempts--list");
// const submit = document.querySelector(".number--button");
// const counter = document.querySelector(".number--paragraph");

// let number = 0;
// const numberToGuess = 56;
// const guessCounter = [];

// const guessNumber = () => {
//   number = parseInt(numberInput.value);
//   !guessCounter.includes(number) ? guessCounter.push(number) : null;
//   counter.textContent = guessCounter.length;

//   return number === numberToGuess
//     ? alert(
//         `Odgadłeś cyfrę! Jesto to ${number}. Liczba podjętych prób: ${guessCounter.length}`
//       )
//     : number > numberToGuess
//     ? alert(`Podana przez ciebie cyfra jest zbyt duża`)
//     : alert(`Podana przez ciebie cyfra jest zbyt mała`);
// };

// submit.addEventListener("click", guessNumber);

// zadanie 3

// const numbers = [1, 4, 5, 7, 6, 5, 9, 8];

// const rotate = (numbers, rotate) => {
//   const slicedData = numbers.slice(0, rotate);
//   numbers.splice(0, rotate);
//   slicedData.map(el => {
//     numbers.push(el);
//   });
//   return numbers;
// };

// console.log(numbers);
// console.log(rotate(numbers, 4));

// zadanie 4

// class Fibonacci {
//   constructor() {
//     this.fibonacciNumbers = [];
//   }
//   showFibNumbers(howMany) {
//     let i = 0;
//     while (i < howMany) {
//       i == 0 || i == 1
//         ? this.fibonacciNumbers.push(1)
//         : this.fibonacciNumbers.push(
//             this.fibonacciNumbers[i - 2] + this.fibonacciNumbers[i - 1]
//           );
//       i++;
//     }
//     return this.fibonacciNumbers;
//   }
// }

// const fibonacciNumbers = new Fibonacci();
// console.log(fibonacciNumbers.showFibNumbers(22));

// zadanie 5

// const text = "g67jp02";
// const getDigits = text => {
//   if (typeof text === "number") {
//     const separatedTextNumbers = text
//       .toString()
//       .split("")
//       .map(el => parseInt(el, 10));
//     return separatedTextNumbers;
//   } else {
//     const separatedTextNumbers = text
//       .split("")
//       .map(el => {
//         return parseInt(el, 10);
//       })
//       .filter(Number.isFinite);
//     return separatedTextNumbers;
//   }
// };

// console.log(getDigits(text));

// zadanie 6

const sentence = "uckFay ouyay ootay";
const sentence2 = "Get up man";

const getPigLatin = text => {
  const destructuredText = text.split(" ").map(word => {
    return word.split("");
  });

  destructuredText.forEach((el, i, arr) => {
    if (el[el.length - 1].includes("y") && el[el.length - 2].includes("a")) {
      let i = 0;
      el.unshift(el[el.length - 3]);
      while (i < 3) {
        el.pop();
        i++;
      }
    } else {
      el.push(el[0]);
      el.splice(el[0], 1);
      el.push(`ay`);
    }
  });
  const finalSentence = destructuredText
    .map(el => {
      return el.join("");
    })
    .join(" ");
  return finalSentence;
};

console.log(getPigLatin(sentence2));
