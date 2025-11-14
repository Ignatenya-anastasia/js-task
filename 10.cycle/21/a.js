
let arr = [[1, 2, 3], ["a", "b", "c"]];
let res = [];

for(let i = arr.length - 1; i >= 0; i--){
    let arr1 = [];
    for( let j =  arr[i].length - 1; j >= 0; j--){
        arr1.push(arr[i][j])
    }

    res.push(arr1)
}

console.log(res);
