const num = [14, 15, 16, 17, 18];

function decode(arr) {
let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        newArr.push(i);
    } else {
        newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(decode(num));