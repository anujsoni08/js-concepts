var sortedSquares = function (A) {
  A.forEach((x, index) => (A[index] = x * x));
  A.sort((a, b) => a - b);

  return A;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
