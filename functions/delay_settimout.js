// 延迟 settimeout

function delayTimeout(timeout, time) {
  return new Promise((res, rej) => {
    const now = new Date();
    while (new Date() - now < time) {};
    timeout();
    res();
  })
}

console.log(new Date(), 'start')

const timeout = () => setTimeout(() => {
  console.log(new Date(), 'end')
}, 1000);

delayTimeout(timeout, 1000)