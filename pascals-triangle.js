var generate = function (numRows) {
  const fact = (n) => {
    if (n < 2) {
      return 1;
    }

    return n * fact(n - 1);
  };
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < i + 1; j++) {
      let a = fact(i) / fact(j);
      row.push(a / fact(i - j));
    }

    arr.push(row);
  }

  return arr;
};

console.log(generate(5));
