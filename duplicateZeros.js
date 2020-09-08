/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let convertedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      convertedArray.push(0);
      convertedArray.push(0);
    } else {
      convertedArray.push(arr[i]);
    }

    if (convertedArray.length === arr.length) {
      break;
    }
  }
  arr.length = 0;
  for (let i = 0; i < length; i++) {
    arr[i] = convertedArray[i];
  }
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
