// 计算今天到给定日期过了多少天，包含输入的那天和今天

// 今天是 2022/04/14，输入是 2022/04/01，输出应为 14 天。

function pastDays(date) {
  const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const pastYear = date.getFullYear();
  const pastMonth = date.getMonth() + 1;
  const pastDay = date.getDate();
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth() + 1;
  const currDay = now.getDate();
  let res = 0;
  if (currYear === pastYear) {
    if (currMonth === pastMonth) {
      return currDay - pastDay;
    }
    res += days[pastMonth] - pastDay + 1;
    res += currDay;
    for (let month = pastMonth+1; month < currMonth; month ++) {
      res += days[month];
    }
    return res;
  }
  res += (currYear - pastYear - 1) * 365;
  res += days[pastMonth] - pastDay + 1;
  for (let month = pastMonth + 1; month <= 12; month++) {
    res += days[month];
  }
  res += currDay;
  for (let month = 1; month < currMonth; month++) {
    res += days[month];
  }
  return res
}

console.log(pastDays(new Date('2021/04/01')))