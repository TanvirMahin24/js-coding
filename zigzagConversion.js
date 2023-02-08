/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let arr = [];
  let up = false;
  let index = 0;
  if (numRows === 1) {
    return s;
  }
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    arr[index].push(s[i]);
    console.log(index);
    if (up) {
      index--;
      if (index === 0) {
        up = false;
      }
    } else {
      index++;
      if (index === numRows - 1) {
        up = true;
        index = numRows - 1;
      }
    }
  }

  for (let i = 0; i < numRows; i++) {
    arr[i] = arr[i].join("");
  }
  arr = arr.join("");

  return arr;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
console.log(convert("AB", 1));
