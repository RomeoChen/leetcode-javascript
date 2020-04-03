const proxy = new Proxy({}, {
  get: function(target, prop, receiver) {
    console.log('get', prop);
    return Reflect.get(target, prop, receiver);
  },
  set: function(target, prop, value, receiver) {
    console.log('set');
    return Reflect.set(target, prop, value, receiver)
  }
})

// proxy.count = 1;
// const count = proxy.count

var maxProfit = function (prices) {
  let buy = prices[0];
  let sell = prices[0];
  let len = prices.length;
  for (let i = 1; i < len; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
      sell = prices[i];
    } else if (prices[i] > sell) {
      let sellTodayProfit = sell - buy + maxProfit(prices.slice(i + 1));
      let notSell = prices[i] - buy + maxProfit(prices.slice(i + 2));
      if (sellTodayProfit >= notSell) {
        return sellTodayProfit;
      } else {
        sell = prices[i];
      }
    }
  }
  return sell - buy;
};

// const prices = [1,2,3,0,2]
// console.log(maxProfit(prices));
// console.log(maxProfit([1,2,4]));
console.log(maxProfit([1,2,4,0,2]));