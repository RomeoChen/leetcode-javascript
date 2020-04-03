function flat(arr) {
  let newArr = []
  arr.reduce((previous, current, index, array) => {
    if (current instanceof Array) {
      newArr = newArr.concat(flat(current))
    } else {
      newArr.push(current); 
    }
  }, []);
  return newArr;
}

console.log(flat([1,[2,3],[4,[5,6]]])); // [1,2,3,4,5,6]
