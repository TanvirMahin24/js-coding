/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let l_sum = 0,
    r_sum = 0,
    current = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[i]);
      if (j < current) {
        l_sum += nums[j];
      } else if (j > current) {
        r_sum += nums[j];
        console.log(r_sum);
      }
    }

    current++;

    if (l_sum == r_sum) {
      console.log(r_sum);
      return i;
    } else {
      r_sum = 0;
      l_sum = 0;
    }
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([[2, 1, -1]]));
