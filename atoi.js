/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let num;
  if (parseInt(s)) {
    num = parseInt(s);
    if (num > 2 ** 31 - 1) {
      num = 2 ** 31 - 1;
    } else if (num < -1 * 2 ** 31) {
      num = -1 * 2 ** 31;
    }
  } else {
    num = 0;
  }
  return num;
};

console.log(myAtoi("4193 with words"));
console.log(myAtoi("   -42"));
console.log(myAtoi("42"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("91283472332"));
