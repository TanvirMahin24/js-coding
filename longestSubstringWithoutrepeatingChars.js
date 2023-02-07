/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;

  if (s.length === 1) {
    return 1;
  }
  for (let i = 0; i < s.length; i++) {
    let end = null;
    let currentStrs = [];
    for (j = i; j < s.length; j++) {
      if (currentStrs.includes(s[j])) {
        end = j - 1;
        //console.log(j)
        break;
      } else {
        end = j;
        //console.log(j)
        currentStrs.push(s[j]);
      }
    }
    if (max < end - i + 1) {
      console.log(end);
      max = end - i + 1;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("aa"));
