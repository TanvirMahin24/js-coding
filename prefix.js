var longestCommonPrefix = function (strs) {
  let ans = "";
  for (let i = 0; ; i++) {
    let check = 0;
    let c = null;
    for (let j = 0; j < strs.length; j++) {
      if (i < strs[j].length) {
        check++;
      }
      if (j === 0) {
        c = strs[j][i];
        console.log(c);
      } else {
        if (c !== strs[j][i]) {
          console.log(c);
          return ans;
        }
      }
    }
    ans = `${ans}${c ? c : ""}`;
    if (check === 0) {
      return ans;
    }
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
