let arr = [1, -2, 3, -4, 5, -6];
let res = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        continue;
    }
    if(arr[i] > 0){
        res += arr[i];
    }
}

console.log(res);
