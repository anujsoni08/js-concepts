// let multiply = function (x, y) {
//   console.log(x, "  ", y);
//   console.log(x * y);
// };

let multiply = function (x) {
  return function (y) {
    console.log(x, "  ", y);
    console.log(x * y);
  };
};

// let multiplyByTwo = multiply.bind(this, 2);

// let multiplyByThree = multiply.bind(this, 3);

// multiplyByTwo(2);

let multiplyByTwo = multiply(2);
multiplyByTwo(10);

let multiplyByThree = multiply(3);
multiplyByThree(10);
