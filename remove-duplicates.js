var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      console.log(nums);
      i--;
    }
  }
  console.log(nums);
  return nums;
};

var removeElement = function (nums, val) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      console.log(nums);
      i--;
    }
  }
  console.log(nums);
  return nums;
};

console.log(removeElement([1, 1, 2, 2, 3, 3, 3, 3, 4], 3));
