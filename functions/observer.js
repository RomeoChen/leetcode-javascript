// 数据监听和依赖收集

const isObject = obj => obj !== null && typeof obj === 'object';

// dependency
class Dep {
  constructor() {
    this.subs = [];
  }
  static target = null;
  addSub(watcher) {
    this.subs.push(watcher);
  }
  notify() {
    console.log(this.subs)
    this.subs.forEach(watcher => watcher.update())
  }
}

// watcher
class Watcher {
  constructor(vm, fn) {
    this.vm = vm;
    this.fn = fn;
    Dep.target = this;
  }

  update() {
    this.fn.call(this.vm);
  }
}

function observe(obj) {
  if (!isObject(obj)) return;
  Object.entries(obj).forEach(([key, value]) => defineReactive(obj, key, value));
}

function defineReactive(obj, key, value) {
  observe(value);
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get: () => {
      Dep.target && dep.addSub(Dep.target);
      return value;
    },
    set: (newValue) => {
      if (value === newValue) return;
      value = newValue;
      dep.notify();
    }
  })
}

const vm = { name: 'romeo' };
const watcher = new Watcher(vm, function(){ console.log('name: ', this.name)});
const data = { x: 1, y: 2 };
observe(data);
const x = data.x;
const y = data.x;
data.x = 3;
