var plusOne = function (digits) {
  let c = -1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (c === -1) {
      digits[i]++;
    } else {
      digits[i]++;
      c = -1;
    }

    if (digits[i] === 10) {
      digits[i] = 0;
      c = 1;
    } else {
      break;
    }
  }
  if (c !== -1) {
    digits.unshift(1);
  }

  return digits;
};

var addBinary = function (a, b) {
  a = parseInt(a, 2);
  b = parseInt(b, 2);
  console.log(a);
  a = Number(a + b).toString(2);

  return a;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));
console.log(plusOne([1, 1, 4, 9, 9, 9, 9]));

console.log(addBinary("11", "1"));
