var canConstruct = function (ransomNote, magazine) {
  ransomNote = ransomNote.split("");
  magazine = magazine.split("");

  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.includes(ransomNote[i])) {
      magazine[magazine.indexOf(ransomNote[i])] = -1;
      ransomNote[i] = -1;
    } else {
      return false;
    }
  }

  for (let j = 0; j < ransomNote.length; j++) {
    if (ransomNote[j] !== -1) {
      return false;
    }
  }

  console.log(magazine);

  return true;
};

console.log(canConstruct("a", "ab"));
