// 实现函数式编程 compose
// 将 fn1(fn2(fn3(1))) 转换为 compose(fn1, fn2, fn3)(1) 的形式

function compose (...fns) {
  if (fns.length === 0) return arg => arg;
  if (fns.length === 1) return fns[0];

  // method 1:
  // return args => fns.reverse().reduce((a, b) => b(a), args);

  
  // method 2:
  // return args => {
    // let res = args;
    // for (const fn of fns.reverse()) {
    //   res = fn(res);
    // }
    // return res
  // }

  // method 3:
  return fns.reduce((prev, curr) => (...args) => prev(curr(...args)))
}

const fn1 = x => x + 1;
const fn2 = x => x + 2;
const fn3 = x => x + 3;
console.log(fn1(fn2(fn3(1))));
console.log(compose(fn1, fn2, fn3)(1));
