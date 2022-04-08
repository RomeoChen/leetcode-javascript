// 将一个对象扁平化
/**
输入:
{
    a: {
        b: {
            c: {
                d: 1
            },
            d: 2
        },
        d: 3,
    },
    b: 1
}
输出：
{
    a.b.c.d: 1,
    a.b.d: 2,
    a.d: 3,
    b: 1
}
*/

function flatObject(obj) {
  if (!obj) return null;
  const res = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      const valueRes = flatObject(value);
      Object.entries(valueRes).forEach(([k, v]) => {
        res[`${key}.${k}`] = v;
      });
    } else {
      res[key] = value;
    }
  });
  return res;
};

/**
调换输入输出，实现展开
 */
function func(obj) {
  const res = {};
  function f(o, k, v) {
    if (!k.includes('.')) {
      o[k] = v;
      return;
    };
    const index = k.indexOf('.');
    const k1 = k.slice(0, index);
    const k2 = k.slice(index + 1);
    o[k1] = o[k1] || {};
    f(o[k1], k2, v);
  }
  Object.entries(obj).forEach(([key, value]) => {
    f(res, key, value)
  })
  return res;
}

const object = {
  'a.b.c.d': 1,
  'a.b.d': 2,
  'a.d': 3,
  'd': 4,
}
console.log(JSON.stringify(func(object)))