let arr = [];
let arr1 = [];

for (let i = 0; i < 10; i++) {
    arr.push(prompt());
    arr[i][0] == "1" || arr[i][0] == "2" || arr[i][0] == "5" ? arr1.push(arr[i]) : null;
}

console.log(arr1);