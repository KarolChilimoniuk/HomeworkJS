// <<<<<<<<<<<<<<<<<< Exercise 1 >>>>>>>>>>>>>>>

/* const iifeFunction = function () {
  let value;
  const obj = {
    setValue: function (paramValue) {
      value = paramValue;
      return value
    },
    showValue: function (paramValue) {
      if (paramValue) {
        return paramValue;
      } else {
        return "nie wskazano parametru";
      }
    },
    reverseValue: function (paramValue) {
      if (typeof paramValue == "number") {
        return paramValue * (-1);
      } else if (typeof paramValue !== "number") {
        return paramValue.split("").reverse().join("");
      }
    }
  }
  const objSet = obj.setValue(60);
  const objShow = obj.showValue(value);
  const objRev = obj.reverseValue("AbraKadabra");
  return [objSet, objShow, objRev];
}();

console.log(iifeFunction); */


// <<<<<<<<<<<<<<<<<<<<<<<< Exercise 2 >>>>>>>>>>>>>>>>>>>>>>>>>

/* const add = (x, y) => {
  console.log(x + y);
  return x + y;
};

const substr = (x, y) => {
  console.log(x - y);
  return x - y;
};

const mult = (x, y) => {
  console.log(x * y);
  return x * y;
};

const divide = (x, y) => {
  console.log(x / y);
  return x / y;
};

const setOperations = (x, y) => {
  return {
    paramField: {
      a: x,
      b: y
    },
    calculate: function (mathOperation) {
      return mathOperation(setOperations(x, y).paramField.a, setOperations(x, y).paramField.b);
    }
  }
}

setOperations(1000, 12500).calculate(substr); */

// ----------------------------------- example 2 - calculate() as iife--------------------

/* const add = (x, y) => {
  console.log(x + y);
  return x + y;
};

const substr = (x, y) => {
  console.log(x - y);
  return x - y;
};

const mult = (x, y) => {
  console.log(x * y);
  return x * y;
};

const divide = (x, y) => {
  console.log(x / y);
  return x / y;
};

const mixedFunct = (x, y) => {
  return {
    paramField: {
      a: x,
      b: y
    },
    setOperations: function (mathOperation) {
      (function calculate() {
        return mathOperation(mixedFunct(x, y).paramField.a, mixedFunct(x, y).paramField.b);
      }());
    }
  }
}

mixedFunct(400, 500).setOperations(substr); */

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Exercise 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/* const arr = [{
    x: 10,
    y: 40
  },
  {
    x: 1409,
    y: 34
  },
  {
    x: 12,
    y: 3
  },
  {
    x: 10,
    y: 10
  }
];

let sums = [];

const baseObject = {
  x: 0,
  y: 0,
  sum: function () {
    return this.x + this.y;
  }
};

let i = 0;
while (i < arr.length) {
  sums.push(baseObject.sum.call(arr[i]));
  i++;
}

console.log(sums); */

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Exercise 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/* const arr = [{
    x: 1,
    y: 'object one value',
    operation: function () {
      return 'object one prefix ' + this.x + " " + this.y
    }
  },
  {
    x: 2,
    y: 'object two value',
    operation: function () {
      return 'object two prefix ' + this.x + " " + this.y
    }
  },
  {
    x: 3,
    y: 'object three value',
    operation: function () {
      return 'object three prefix ' + this.x + " " + this.y
    }

  },
];

for (let i = 0; i < arr.length; i++) {
  if (i % arr.length-1 !== 0) {
    console.log(arr[i].operation.call(arr[i + 1]));
  } else {
    console.log(arr[i].operation.call(arr[0]));
  }
} */