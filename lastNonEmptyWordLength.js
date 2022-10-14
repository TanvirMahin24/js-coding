var lengthOfLastWord = function (s) {
  s = s.split(" ");
  console.log(s);

  for (let i = 0; i < s.length; i++) {
    console.log(s[s.length - 1 - i]);
    if (s[s.length - 1 - i].length !== 0) {
      return s[s.length - 1 - i].length;
    }
  }

  return s[s.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("Hello World"));
