// 分组函数
/**
input:
 [
   { name: 'romeo', age: 20, book: 'book1' },
   { name: 'romeo', age: 20, book: 'book2' },
   { name: 'jack', age: 20, book: 'book3' },
   { name: 'jack', age: 20, book: 'book4' },
 ]

 group by name

 output: 
 {
  romeo: [
    { name: 'romeo', age: 20, book: 'book1' },
    { name: 'romeo', age: 20, book: 'book2' },
  ],
  jack: [
    { name: 'jack', age: 20, book: 'book3' },
    { name: 'jack', age: 20, book: 'book4' },
  ]
 }
 */

function groupby(arr, key) {
  const res = {};
  arr.forEach(item => {
    const group = item[key];
    res[group] = (res[group] || []).concat(item);
  })
  return res;
}

const groups = [
  { name: 'romeo', age: 20, book: 'book1' },
  { name: 'romeo', age: 20, book: 'book2' },
  { name: 'jack', age: 20, book: 'book3' },
  { name: 'jack', age: 20, book: 'book4' },
]
console.log(groupby(groups, 'name'));