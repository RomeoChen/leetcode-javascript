const numStr = '1234';

function isNiceNum(numStr) {
  const hasContiniousSame = (numStr) => {
    let sameStr = numStr[0];
    let maxLen = 1;
    for (let c of numStr.slice(1)) {
      if (c === sameStr[sameStr.length-1]) {
        sameStr += c;
      } else {
        maxLen = Math.max(maxLen, sameStr.length);
        sameStr = c;
      }
    }
    maxLen = Math.max(maxLen, sameStr.length);
    return maxLen >= 4;
  }
  const hasContiniousZeng = (numStr) => {
    let maxLen = 1;
    let dizeng = numStr[0];
    for (let c of numStr.slice(1)) {
      if (c - dizeng[dizeng.length-1] === 1) {
        dizeng += c;
      } else {
        maxLen = Math.max(maxLen, dizeng.length);
        dizeng = c;
      }
    }
    maxLen = Math.max(maxLen, dizeng.length);
    return maxLen >= 4;
  }
  return hasContiniousSame(numStr) || hasContiniousZeng(numStr);
}

console.log(isNiceNum(numStr))