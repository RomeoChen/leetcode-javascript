// call
// fn.call(thisArg, arg1, arg2...)

function fn(x, y) {
  return x+y+this.num;
}

const obj = { num: 3 };

console.log(fn.call(obj, 1, 2)); // 6

Function.prototype.mycall = function myCall(thisArg, ...args) {
  const symbol = Symbol();
  thisArg[symbol] = this;
  const res = thisArg[symbol](...args);
  delete thisArg[symbol];
  return res;
}

console.log(fn.mycall(obj, 1, 2)); // 6

// apply
Function.prototype.myapply = function myapply(thisArg, args) {
  const symbol = Symbol();
  thisArg[symbol] = this;
  const res = thisArg[symbol](...args);
  delete thisArg[symbol];
  return res;
}

console.log(fn.myapply(obj, [1, 2])); // 6

// bind
Function.prototype.mybind = function mybind(thisArg, ...args1) {
  const symbol = Symbol();
  const self = this;
  return function(...args2) {
    thisArg[symbol] = self;
    const res = thisArg[symbol](...args1, ...args2);
    delete thisArg[symbol];
    return res;
  }
}

const mybindFn = fn.mybind(obj, 1);
console.log(mybindFn(2))


