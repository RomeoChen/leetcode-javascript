function getInfo(age, address) {
  return this.name + age + address;
}

const mingSir = {
  name: '小明'
}

console.log(getInfo.call(mingSir, 15, 'hubei'));

Function.prototype.mCall = function (thisArg, ...argArray) {
  const fn = Symbol();
  thisArg[fn] = this;
  const res = thisArg[fn](...argArray)
  delete thisArg[fn];
  return res;
}

console.log('mCall:', getInfo.mCall(mingSir, 15, 'hubei'));

Function.prototype.myCall = function () {
  var thisArg = arguments[0];
  thisArg.fn = this;
  var evalStr = 'thisArg.fn(';
  for (var i = 1; i < arguments.length; i++) {
    if (typeof arguments[i] === 'string') {
      evalStr += `"${arguments[i]}",`;
    } else {
      evalStr += `${arguments[i]},`;
    }
  }
  evalStr += ')';
  var res = eval(evalStr);
  delete thisArg.fn;
  return res;
}

console.log('myCall:', getInfo.myCall(mingSir, 15, 'hubei mycall'));


Function.prototype.mApply = function(thisArg, argArray) {
  const fn = Symbol();
  thisArg[fn] = this;
  const res = thisArg[fn](...argArray);
  delete thisArg[fn];
  return res;
}

console.log('mApply:', getInfo.mApply(mingSir, [15, 'hubei']));

const bindFunc = getInfo.bind(mingSir, 15);
console.log('bind: ', bindFunc(' bind'))

Function.prototype.mBind = function(thisArg, ...argArray) {
  const fn = Symbol();
  const self = this;
  return function(...argArray2) {
    thisArg[fn] = self;
    const res = thisArg[fn](...argArray, ...argArray2);
    delete thisArg[fn];
    return res;
  }
}

const mBindFunc = getInfo.mBind(mingSir, 15);
console.log('mBind: ', mBindFunc(' mbind'))
console.log(typeof '123');