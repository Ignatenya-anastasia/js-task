let array = [1, -3, 5, 0, 7];
let sum = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
        continue;
    }
    if(array[i] > 0){
        sum += array[i];
    }
}
console.log(sum);
