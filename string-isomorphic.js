const convert = (txt) => {
  const chars = [];
  const ans = [];
  for (let i = 0; i < txt.length; i++) {
    let tmp;
    if (chars.includes(txt[i])) {
      tmp = chars.indexOf(txt[i]) + "a".charCodeAt(0);
    } else {
      chars.push(txt[i]);
      tmp = chars.length + "a".charCodeAt(0) - 1;
    }
    ans.push(tmp);
  }
  return ans;
};

// test answer
// asdf & erty are isomorphic
let check1 = convert("asdf");
let check2 = convert("erty");

console.log(check1);
console.log(check2);
