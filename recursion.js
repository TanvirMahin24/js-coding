var generateParenthesis = function (n) {
  console.log(n);
  if (n === 0) {
    return "";
  }
  for (let i = 0; i < n; i++) {
    generateParenthesis(n - i - 1);
  }

  return `(${generateParenthesis(n - 1)})`;
};

console.log(generateParenthesis(2));
