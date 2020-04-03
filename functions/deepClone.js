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

const clone = deepClone(target);

clone.info.mark.math = 90;

console.log(target.info.mark.math); // 80

