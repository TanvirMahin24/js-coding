/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let finalArr = [];
  let i = 0;
  let j = 0;
  // console.log(nums2)

  while (i < nums1.length || j < nums2.length) {
    if (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        finalArr.push(nums1[i]);
        // console.log(finalArr)
        i++;
      } else {
        finalArr.push(nums2[j]);
        j++;
      }
    } else {
      if (i < nums1.length) {
        finalArr.push(nums1[i]);
        i++;
      }
      if (j < nums2.length) {
        finalArr.push(nums2[j]);
        j++;
      }
    }
  }
  //console.log(finalArr)

  let len = (nums1.length + nums2.length) / 2;
  console.log(len);
  if ((nums1.length + nums2.length) % 2 === 0) {
    return (finalArr[len] + finalArr[len - 1]) / 2;
  } else return finalArr[parseInt(len)];
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
