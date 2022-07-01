function sequencePosNum(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    i % 2 === 0 && i >= 0 ? arr.push(i) : false;
  }
  return arr;
}
console.log(sequencePosNum(10));
