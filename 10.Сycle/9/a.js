let arr = [2, 5, 9, 15, 0, 4];
let res = [];

let i = 0;
while (i < arr.length) {
  if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
    res.push(arr[i]);
  }
  i++;
}
console.log(res);