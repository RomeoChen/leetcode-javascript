function flat(arr) {
  let newArr = [];
  newArr = arr.reduce((acc, val) => {
    for (let c of val) {
      while (typeof c === 'object') {
        
      }
    }

  }, []);

}

function deepClone(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      newObj[key] = deepClone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const target = {
  name: 'aa',
  info: {
    hobby: 'eat',
    mark: {
      math: 80,
      english: 70
    }
  },
  isMale: false,
  address: {
    road: '1-106',
    number: '1504'
  }
}

function A(){}
var a = new A();
a instanceof A;
function instance_of(a,A) {
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
console.log(instance_of(a, Object));

function Observer(data){
  let observer = {};
  for (let [key, value] of Object.entries(data)) {
    if (typeof value === 'object') {
      Object.defineProperty(observer, key, {
        value: Observer(value)
      })
    } else {
      Object.defineProperty(observer, key, {
        set() {
          
        }
      })
    }

  }
}



