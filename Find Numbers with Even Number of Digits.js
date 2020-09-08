let findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let currentCount = 0;

    while (num > 0) {
      currentCount++;
      num = Math.floor(num / 10);
    }
    if (currentCount % 2 == 0) {
      count = count + 1;
    }
  }
  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
