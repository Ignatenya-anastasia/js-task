let arr = [1, 3, 6, 8, 9, 12];
let sum = 0;
let res = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 3 == 0){
        sum += 1;
        res += +arr[i];
    }
}

console.log(res);
