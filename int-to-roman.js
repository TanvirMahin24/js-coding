var intToRoman = function (num) {
  let ans = [];
  console.log(num);
  const vals = [
    {
      s: "I",
      v: 1,
    },
    {
      s: "IV",
      v: 4,
    },
    {
      s: "V",
      v: 5,
    },
    {
      s: "IX",
      v: 9,
    },
    {
      s: "X",
      v: 10,
    },
    {
      s: "XL",
      v: 40,
    },
    {
      s: "L",
      v: 50,
    },
    {
      s: "XC",
      v: 90,
    },
    {
      s: "C",
      v: 100,
    },
    {
      s: "CD",
      v: 400,
    },
    {
      s: "D",
      v: 500,
    },
    {
      s: "CM",
      v: 900,
    },
    {
      s: "M",
      v: 1000,
    },
  ];

  while (num !== 0) {
    for (let i = vals.length - 1; i >= 0; i--) {
      if (num >= vals[i].v) {
        console.log(vals[i].s);
        num -= vals[i].v;
        console.log(num);
        ans.push(vals[i].s);
        break;
      }
    }
  }

  return ans.join("");
};

var romanToInt = function (s) {
  let sum = 0;
  const vals = [
    {
      s: "I",
      v: 1,
    },
    {
      s: "IV",
      v: 4,
    },
    {
      s: "V",
      v: 5,
    },
    {
      s: "IX",
      v: 9,
    },
    {
      s: "X",
      v: 10,
    },
    {
      s: "XL",
      v: 40,
    },
    {
      s: "L",
      v: 50,
    },
    {
      s: "XC",
      v: 90,
    },
    {
      s: "C",
      v: 100,
    },
    {
      s: "CD",
      v: 400,
    },
    {
      s: "D",
      v: 500,
    },
    {
      s: "CM",
      v: 900,
    },
    {
      s: "M",
      v: 1000,
    },
  ];

  let doubleChars = ["IV", "IX", "XL", "XC", "CD", "CM"];

  for (let i = 0; i < s.length; i++) {
    if (doubleChars.includes(`${s[i]}${s[i + 1]}`)) {
      let num = vals.filter((item) => item.s === `${s[i]}${s[i + 1]}`)[0];
      sum += num.v;
      i++;
    } else {
      let num2 = vals.filter((item) => item.s === s[i])[0];
      sum += num2.v;
    }
  }
  console.log(sum);
  return sum;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("XX"));
console.log(romanToInt("LVIII"));
console.log(intToRoman(58));
console.log(intToRoman(20));
console.log(intToRoman(1994));
