let arr = [1, 3, 2, 4, 4, 5, 3];
let res = [];

for(let i = 1; i < arr.length - 1; i++){
    if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
        res.push(arr[i]);
    }
}

console.log(res);

