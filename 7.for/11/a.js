let array = [5, 12, 7, 9, 14];
let max = array[0];
for(let i = 0; i < array.length; i++){
    if(max <= array[i]){
        max = array[i];
    }
}

console.log(max);