let arr = process.argv;
let removeStringArr = arr.filter(Number);
let removeNegative = removeStringArr.filter((x) => { return x > -1 });
let sortedArr = removeNegative.sort((a, b) => {
  return a - b;
});

for (let i = 0; i < sortedArr.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, sortedArr[i] * 1000);
}