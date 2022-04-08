const ROME_NUMBER = ['I', 'V', 'X', 'L', 'C'];

function numberToRome(number) {
  const numberStr = String(number)
  const numberStrLen = numberStr.length;
  let result = '';
  for (let i = 0; i < numberStrLen; i ++) {
    const one = ROME_NUMBER[i * 2];
    const five = ROME_NUMBER[i * 2 + 1];
    const ten = ROME_NUMBER[i * 2 + 2];
    const currentBit = [
      '',
      `${one}`,
      `${one}${one}`,
      `${one}${one}${one}`,
      `${one}${five}`,
      `${five}`,
      `${five}${one}`,
      `${five}${one}${one}`,
      `${five}${one}${one}${one}`,
      `${five}${ten}`,
    ];
    result = currentBit[Number(numberStr[numberStrLen - i - 1])] + result;
  }
  return result;
}

const tests = [1, 4, 14, 29, 30, 44, 58, 91, 90];

console.log(Array(99).fill(0).map((_, index) => index + 1).map(numberToRome))