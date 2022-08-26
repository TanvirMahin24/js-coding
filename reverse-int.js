var reverseInt = function (x) {
  let tmp = x.toString().split("");

  if (tmp[0] === "-") {
    tmp = tmp.reverse();
    tmp = tmp.slice(0, tmp.length - 1);
    return parseInt(`-${tmp.join("")}`);
  }
  return parseInt(tmp.reverse().join(""));
};

console.log(reverseInt(-321));
console.log(reverseInt(321000));
