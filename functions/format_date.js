// 格式化日期
// 将 2020/03/14 按照 'MM-DD-YYYY' 的形式格式化为 03-14-2020

function formatDate(date, rule = '') {
  const [year, month, day] = date.split('/');
  return rule.replace('YYYY', year).replace('MM', month).replace('DD', day)
}

console.log(formatDate('2020/03/14', 'MM-DD-YYYY'))