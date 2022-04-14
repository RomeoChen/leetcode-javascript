// 使用 requestAnimationFrame 模拟 setTimeout 和 setInterval
// requestAnimationFrame 每秒执行60次

function mockSetTimeout(func, time) {
  let t = 0;
  const rquestFunc = () => {
    t ++;
    if (t * (1000 / 60) >= time) {
      func();
      cancelAnimationFrame(rquestFunc) 
    } else {
      requestAnimationFrame(rquestFunc);
    }
  }
  requestAnimationFrame(rquestFunc)
}

mockSetTimeout(() => {
  console.log('123')
}, 1000)

const mockSetInterval = (fn, time) => {
  let t = 0;
  const func = () => {
    t ++;
    if (t / 60 >= time / 1000) {
      fn();
      mockSetInterval(fn, time);
    } else {
      requestAnimationFrame(func);
    }
  }
  requestAnimationFrame(func);
  return interval
}
