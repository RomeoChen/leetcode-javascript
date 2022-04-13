function spawn(genFunc) {
  return new Promise((resolve, reject) => {
    let gen = genFunc();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(
        value => step(() => gen.next(value)),
        reason => step(() => gen.throw(reason))
      )
    }
    step(() => gen.next(undefined));
  })
}

function func(seconds) {
  spawn(function *() {
    const str1 = yield delay(seconds + 1, `delay ${seconds + 1} seconds`)
    console.log(str1);
    const str2 = yield delay(seconds, `delay ${seconds} seconds`)
    console.log(str2)
  })
}

function delay(time, str = 'delay') {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(str)
    }, time * 1000);
  })
}

async function asyncfunc(number) {
  const str1 = await delay(number * 1000);
  console.log(str1);
  const str2 = await delay(number * 500);
  console.log(str2);
}


/** 实现 Promise.resolve */
function promiseResolve(value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  })
}

// promiseResolve(1).then(console.log);

/** 实现 Promise.all */
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!(promises instanceof Array)) {
      throw new Error('...');
    }
    let count = 0;
    let results = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(val => {
        count += 1;
        results[i] = val;
        if (count === promises.length) resolve(results);
      }).catch(err => reject(err));
    }
  })
}

const promises = Array(10).fill(0).map((_, index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(index)
    }, Math.random() * 1000)
  })
})

// PromiseAll(promises).then(console.log)
// Promise.all(promises).then(console.log)

/** 给定一个 promises 数组，前一个 resolve 后再执行下一个 */

const promisesGenerator = Array(10).fill(0).map((_, index) => () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(index);
      resolve(index)
    }, Math.random() * 1000)
  })
})

// promisesGenerator.reduce((total, item) => {
//   return total.then(res => {
//     return item();
//   })
// }, Promise.resolve(-1))


/** 实现一个调度器，每次执行给定数目的 promise */
function promiseSchedule(promises, num) {
  if (!Array.isArray(promises)) throw new Error();

  const run = () => {
    promises.length && promises.shift()().then(res => {
      run();
    })
  }

  for (let i = 1; i <= num; i++) {
    run();
  }
}

const promisesGenerator_2 = Array(10).fill(0).map((_, index) => () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(index);
      resolve(index)
    }, 1000)
  })
})


// promiseSchedule(promisesGenerator_2, 5)

/** 实现 Promise.race */
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(res => resolve(res)).catch(err => reject(err))
    });
  })
}

promiseRace(promises).then(console.log)