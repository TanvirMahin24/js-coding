/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let max = 0;
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  if (fruits.length < 4) {
    var unique = fruits.filter(onlyUnique);
    if (unique.length === 1 || unique.length === 2) {
      return fruits.length;
    } else {
      return 2;
    }
  }

  for (let i = 0; i < fruits.length; i++) {
    let num1 = fruits[i];
    let num2 = null;
    let idx = i + 1;
    for (let j = i + 1; j < fruits.length; j++) {
      if (num2 === null && fruits[j] !== num1) {
        num2 = j;
      }
      if (num1 === fruits[j]) {
        idx = j;
        console.log(idx);
        continue;
      } else if (fruits[j] === fruits[num2]) {
        idx = j;
        continue;
      } else {
        break;
      }
    }

    if (max < idx - i + 1) {
      max = idx - i + 1;
      console.log(idx, i);
    }
    // console.log(idx, i);
  }

  return max;
};

console.log(totalFruit([1, 2, 1, 2, 22, 2]));
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([0, 0, 1, 1]));
console.log(totalFruit([1, 2, 3, 2, 2]));
console.log(totalFruit([3, 3, 3, 3, 3, 3]));
