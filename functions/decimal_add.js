// 小数相加，不允许直接使用加号，输入均为字符串

// 1.235 + 12.4 = 13.635

function addDecimals(a, b) {
  let [inta, decimala = ''] = a.split('.');
  let [intb, decimalb = ''] = b.split('.');
  const maxDecimalLength = Math.max(decimala.length, decimalb.length);
  decimala = decimala.padEnd(maxDecimalLength, '0');
  decimalb = decimalb.padEnd(maxDecimalLength, '0');
  let decimalRes = '';
  let i = maxDecimalLength - 1;
  let currAdd = 0;
  while (i >= 0) {
    const currRes = currAdd + parseInt(decimala[i]) + parseInt(decimalb[i]);
    currAdd = currRes >= 10 ? 1 : 0;
    decimalRes = currRes >= 10 ? (currRes - 10 + decimalRes) : (currRes + decimalRes);
    i--;
  }
  const maxIntLength = Math.max(inta.length, intb.length);
  inta = inta.padStart(maxIntLength, '0');
  intb = intb.padStart(maxIntLength, '0');
  i = maxIntLength - 1;
  let intRes = '';
  while (i >= 0) {
    const currRes = currAdd + parseInt(inta[i]) + parseInt(intb[i]);
    currAdd = currRes >= 10 ? 1 : 0;
    intRes = currRes >= 10 ? (currRes - 10 + intRes) : (currRes + intRes);
    i--
  }
  if (currAdd) intRes = '1' + intRes;
  return intRes + '.' + decimalRes;
}

console.log(addDecimals('1.23', '234.3')) // 235.53
console.log(addDecimals('0.59', '9.9')) // 10.49