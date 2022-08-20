/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let flag = 0;
  for (let i = 0; i < data.length; i++) {
    let tmp = data[i].toString(2);
    console.log(tmp);
    if (tmp.length < 8) {
      for (let j = 0; j < 8 - tmp.length; j++) {
        tmp = "0" + tmp;
      }
    }
    if (tmp[0] === "0" && flag !== 0) {
      return false;
    } else if (tmp[0] !== "0") {
      if (tmp[0] !== "0" && tmp[1] === "0") {
        flag--;
        console.log(flag);
      } else if (tmp[0] !== "0" && tmp[1] !== "0") {
        for (let j = 1; j < 8; j++) {
          if (tmp[j] !== "0") {
            flag = flag + 1;
            if (flag > 3) {
              return false;
            }
          } else {
            console.log(i, j);
            break;
          }
        }
        console.log(flag);
      }

      console.log(data[i]);
    }
  }
  console.log(flag);
  if (flag !== 0) {
    return false;
  }
  return true;
};

console.log(validUtf8([250, 145, 145, 145, 145]));
