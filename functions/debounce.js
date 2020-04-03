let i = '';
function add(number) {
  i += number;
}

function debounce(fn, seconds) {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
      console.log(i);
    }, seconds*1000);
  }
}

const debounceAdd = debounce(add, 1);

// for (let j = 0; j < 50; j++) {
//   debounceAdd(j);
// }

function throttle(fn, seconds) {
  let todo = false;
  return function() {
    if (!todo) {
      todo = true;
      setTimeout(() => {
        todo = false;
        fn.apply(this, arguments);
        console.log(i);
      }, seconds*1000);
    }
  }
}

const trottleAdd = throttle(add, 1);

// let j = 0;
// const interval = setInterval(() => {
//   trottleAdd(j)
//   j++
//   if (j === 50) {
//     clearInterval(interval)
//   }
// }, 300);

Promise._all = function(promiseArray = []) {
  let results = [];
  let resultNum = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseArray.length; i ++) {
      promiseArray[i].then(
        value => { results[i] = value; resultNum ++; },
        reason => { reject(reason) }
      )
    }
    if (resultNum === promiseArray.length) {
      resolve(results);
    }
  })
}

const promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve('promise1')
  }, 300);
})

const promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('promise2')
  }, 600);
})

Promise._all([promise1, promise2]).then(values => {
  console.log('_all', values)
})

Promise.all([promise1, promise2]).then(values => {
  console.log('all', values)
})