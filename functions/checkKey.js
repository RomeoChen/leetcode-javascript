// 检查对象是否有 key，key 的形式可能为 a.b

function checkKey(obj, key) {
  const keys = key.split('.');
  let i = 0;
  let curr = obj;
  while (i < keys.length) {
    if (curr[keys[i]] === undefined) return false;
    curr = curr[keys[i]];
    i++;
  }
  return true;
}

const obj = { a: { b: { name: 1 }}}
console.log(checkKey(obj, 'a.b')) // ture
console.log(checkKey(obj, 'a.name')) // false
