function A() { }
var a = new A();

function instance_of(a, A) {
  let aProto = a.__proto__;
  while (aProto) {
    if (aProto === A.prototype) {
      return true;
    } else {
      aProto = aProto.__proto__;
    }
  }
  return false;
}
console.log(a instanceof A); // true

console.log(instance_of(a, Object)); // true