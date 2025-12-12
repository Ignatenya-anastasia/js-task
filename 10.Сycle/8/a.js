let arr = ["apple", 3, "orange", 2];
let res = [];

for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
    continue;
} else {
    res.push(arr[i]);
}
}

console.log(res);