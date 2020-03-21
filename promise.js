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
