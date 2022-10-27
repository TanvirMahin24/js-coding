/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let ar = [];
  let n1 = 0,
    n2 = 1,
    nextTerm;
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }
  for (let i = 1; i <= n + 2; i++) {
    ar.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(ar);
  return ar[ar.length - 1];
};

console.log(climbStairs(6));
