/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  let str = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j >= i; j--) {
      let check = checkPalindrome(s.substring(i, j));
      if (check === true) {
        //console.log(s.substring(i, j).length);
        if (str.length < s.substring(i, j).length) {
          str = s.substring(i, j);
          // console.log(str);
        }
      }
    }
  }
  return str;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("ccccc"));
console.log(longestPalindrome("aa"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome(""));
