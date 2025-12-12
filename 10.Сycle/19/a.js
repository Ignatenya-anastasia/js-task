let arr = [
        [2, 4, 6],
        [1, 3, 5, 7],
        [10]
        ];
let res = [];

for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for(let j = 0; j < arr[i].length; j++){
    sum += arr[i][j];
    }
    let resNum = sum / arr[i].length;
    res.push(resNum);
}

console.log(res);
