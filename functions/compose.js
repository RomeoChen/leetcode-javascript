// 实现函数式编程 compose
// 将 fn1(fn2(fn3(1))) 转换为 compose(fn1, fn2, fn3)(1) 的形式

function compose (...fns) {
  return function (args) {
    return fns.reverse().reduce((prev, curr) => {
      return curr(prev);
    }, args)
    // let res = args;
    // for (const fn of fns.reverse()) {
    //   res = fn(res);
    // }
    // return res
  }
}

const fn1 = x => x + 1;
const fn2 = x => x + 2;
const fn3 = x => x + 3;
console.log(fn1(fn2(fn3(1))));
console.log(compose(fn1, fn2, fn3)(1));
