
function getSingle(fn) {
    let single = undefined;
    return function() {
      return single || (single = fn())
    };
  }

// const s = new Single();

const generateSingle1 = () => {
  return {
    name: 'single',
    age: 18,
  }
}

const generateSingle2 = () => {
  return {
    name: 'single2',
    height: 180,
  }
}

const gen1 = getSingle(generateSingle1);

const a11 = gen1();
console.log('a11: ', a11);

const a12 = gen1();
console.log('a12: ', a12);

a11.age = 20;
console.log('a12: ', a12);
console.log('a11 === a12 ?', a11 === a12);

const gen2 = getSingle(generateSingle2);
const a21 = gen2();
console.log(a21);

const a22 = gen2();
console.log(a22);

a21.height = 178;
console.log(a22);
console.log(a21 === a22);