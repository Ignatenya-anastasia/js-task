let arr = [1, -3, 5, 0, -2, 7];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        sum += 1;
    }
}
console.log(sum);
