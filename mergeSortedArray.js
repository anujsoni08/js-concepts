var merge = function (nums1, m, nums2, n) {
  let count1 = m;
  let count2 = n;
  let totalLength = m + n;
  if (m == 0 || n == 0) {
    if (m == 0) {
      for (let i = 0; i < n; i++) {
        nums1[i] = nums2[i];
      }
    }
  } else {
    while (count1 >= 0 || count2 >= 0) {
      console.log(count1, count2);
      if (nums1[count1 - 1] >= nums2[count2 - 1]) {
        nums1[totalLength - 1] = nums1[count1 - 1];
        totalLength--;
        count1--;
      } else {
        nums1[totalLength - 1] = nums2[count2 - 1];
        totalLength--;
        count2--;
      }
    }
  }
  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
