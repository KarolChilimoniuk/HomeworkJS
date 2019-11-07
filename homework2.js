let arr = [1, 6, 23, 8, 4, 8, 3, 7];

//Exercise 1

/* let sum = 0;

function sumAll(x) {
  let i = 0
  while (i < arr.length) {
    sum = sum + x[i];
    i++
  }
  return sum; // return musi być tutaj, bo jego uruchomienie przerywa działanie funkcji. Gdy wsadzimy go do petli to przerwie jej wykonywanie po pierwszej iteracji!!!
}

let score = sumAll(arr);

console.log(score); */


/* arr.forEach(function (value, index, array) {
  let sum = 0;
  sum = sum + arr[i];
  return sum;
}) */

//Exercise 2

/* function sumEl(x) {
  let sum = arr.length - 1 + x[0];
  return sum;
}

let score = sumEl(arr);

console.log(score); */

//Exercise 3 *** stworzyć obiekt???

/* let factorials = [];

function factorial(x) {
  let score = 1;
  for (let i = 0; i < x.length; i++) {
    let indexValue = x[i];
    for (let i = 1; i <= indexValue; i++) { // zaczynamy od i = 1 bo gdy bierzemy tylko wartość indexu jako granicę to index 0 = 0
      score *= i;
    }
    factorials.push(score);
    score = 1; // musimy wyczyścić tutaj score, bo inaczej wynik z poprzedniego indexu przechodzi do kolejnego bo miało miejsce nadpisanie.
  }
}

factorial(arr);
console.log(factorials); */

//Exercise 4

/* let arrReverse = [];

function reverse(x) {
  for (let i = 0; i < arr.length; i++) {
    arrReverse.unshift(x[i]);
  }
  arr = arrReverse;
}

reverse(arr);
console.log(arr); */

// Exercise 5 

/* function sumElements(x) {
  let newArr = [];
  for (let i = 0; i < x.length; i += 2) {
    let sum = x[i] + x[i + 1];
    newArr.push(sum);
  }
  return newArr;
}

let newPattern = sumElements(arr);

console.log(newPattern); */

// Exercise 6 

/* function removeAdd(x) {
  let newArr = [];

  x.pop(); //

  for (let i = 0; i < x.length; i++) {
    if (i % 2 == 0 && x[i] !== x[x.length - 1]) {
      let sum = x[i] + x[i + 1];
      newArr.push(sum);
    } else if (x[i] == x[x.length - 1]) {
      sum = x[i] + x[i];
      newArr.push(sum);
    }
  }
  // console.log(newArr) // ale tylko gdy nie weźmiemy jeśli chcemy tylko wywoływać f-cję bez przypisywania jej returna do zmiennej
  return newArr;
}

// jeśli tutaj dodatkowo wywołamy funkcję to tak jakby będziemy mieli już dwa wywołania i skrócony o dwa indexy array arr!!! Dlatego wystarcza sama zmienna z funkcją

let newPattern = removeAdd(arr);
console.log(newPattern);
 */


// Exercise 7

/* function random(x) {
  let digit = x[Math.floor(Math.random() * x.length)];
  return digit;
}

let showRandom = random(arr);
console.log(showRandom);
 */

// Exercise 8 

/* function lowest(x, y) {
  let randomDigits = [];
  let randomDigit = 0;
  let lowest = x[Math.floor(Math.random() * x.length)];
  for (let i = 0; i <= y; i++) {
    randomDigit = x[Math.floor(Math.random() * x.length)];
    randomDigits.push(randomDigit);
    if (randomDigit < lowest) {
      lowest = randomDigit;
    }
  }
  console.log(randomDigits);
  return lowest
}

let show = lowest(arr, 3);
console.log(show); */

// ALBO Prostsze

/* let randomDigits = [];

function lowest(x, y) {
  for (let i = 0; i <= y; i++) {
    randomDigit = x[Math.floor(Math.random() * x.length)];
    randomDigits.push(randomDigit);
  }
  return Math.min(...randomDigits); // w Math.mini max() trzeba podać min. dwa argumenty, dlatego sama nazwa tablicy za NaN. Tutaj trzeba użyć spread operatora ... aby rozwinęło wszystkie el. tablicy
}

let showLowest = lowest(arr, 4);
console.log(showLowest); */


// Exercise 9 --------------------
/* let newArr = [];

function randomElement(x) {
  if (arr != []) {
    for (let i = 0; i < x.length; i++) {
      let digit = x[Math.floor(Math.random() * x.length)];
      if (arr.includes(digit)) {
        newArr.push(digit);
        arr.splice(x[x.indexOf(digit)], 1);
      }
    }
  }
}

randomElement(arr);
console.log(arr);
console.log(newArr); */


//Exercise 10 
/* 
function randomOperation(x) {
  let operations = [-1, 1];
  // let randomArr = x[Math.floor(Math.random() * x.length)];
  // let randomArr2 = x[Math.floor(Math.random() * x.length)];
  // let randomOp = operations[Math.floor(Math.random() * operations.length)];
  // let sum = randomArr * randomOp + randomArr2;
  let sum = operations[Math.floor(Math.random() * operations.length)] * x[Math.floor(Math.random() * x.length)] + x[Math.floor(Math.random() * x.length)];
  return sum;
}

let showSum = randomOperation(arr);
console.log(showSum);
 */
// Exercise 11 

/* let dateArr = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];
let dateData = new Date();
let currentDate = dateData.getDay();


function showDate(x, y) {

  let dayPl = '';
  if (y == 1) {
    dayPl = x[0];
  } else if (y == 2) {
    dayPl = x[1];
  } else if (y == 3) {
    dayPl = x[2];
  } else if (y == 4) {
    dayPl = x[3];
  } else if (y == 5) {
    dayPl = x[4];
  } else if (y == 6) {
    dayPl = x[5];
  } else {
    dayPl = x[6];
  }
  console.log(`Dzisiaj mamy ${dayPl}.`);
  return dayPl;
}

showDate(dateArr, currentDate); */

/* let dateArr = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
let dateData = new Date();
let currentDate = dateData.getDay();

function showPlDay(x, y) {
  console.log(`Dzisiaj jest ${x[y]}`); // zapis jak np by było dateArr[currentDate]; 
}

showPlDay(dateArr, currentDate); */


// Exercise 12 

/* let currentDate = new Date();
let fridayDate = new Date(2019, 10, 01);

function days(x, y) {
  let howLong = Math.floor((x.getTime() - y.getTime()) / (24 * 60 * 60 * 1000)); 
  if (howLong == 0) {
    howLong = 1;
  } else {
    howLong = howLong;
  }
  return howLong;
};

let toFriday = days(fridayDate, currentDate);

console.log(`Zostało ${toFriday} dni do piątku`);

// musimy dowiedziec się ile millisekund odpowiada obu datom, potem podzielic to przez liczbę ms w czasie 1 dnia, a potem musimy wyciągnąć za pomocą Math.floor() największą liczbę całkowitą z przedziału, aby było bez reszty. Instr warunkowa ma nas uchronić przed syt, gdyby ta liczba całk. wynosiła zero. */

//Exercise 13

/* function newFunc(x, y, z) {
  let newArr = [];
  let obj = {};
  for (let i = 0; i < 2; i++) {
    let randomDigit = x[Math.floor(Math.random() * x.length)];
    newArr.push(randomDigit);
  }
  let add = newArr[y] + newArr[z];
  let subst = newArr[y] - newArr[z];
  let div = newArr[y] / newArr[z];
  let mult = newArr[y] * newArr[z];
  obj = {
    adding: add,
    substratting: subst,
    div: div,
    mult: mult,
  }
  // obj.toJa = 'cześć';
  return obj
}

let showObj = newFunc(arr, 0, 1);
console.log(showObj);
 */

//HANIA

/* let today = new Date();
let whichDay = today.getDay();

switch (whichDay) {
  case 0:
    console.log('niedziela');
    break;
  case 1:
    console.log('poniedziałek');
    break;
  case 5:
    console.log('piątek');
} */

/* let date = new Date();
let today = date.getDay();
let howManyD = 0;

function counting(a) {
  if (a < 6) {
    howManyD = 5 - a;
    console.log(howManyD);
  } else {
    console.log(a);
  }
}

counting(today); */