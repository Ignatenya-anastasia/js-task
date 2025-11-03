let array = [1, 3, 5, 6, 9] ;
let sum = 0;
let first = null;
let second = null;

for(let i = 0; i < array.length; i++){
    if(array[i] % 3 == 0){
        sum += 1;
        if(sum === 1){
            first = array[i];
        } else if(sum === 2){
            second = array[i];
            break;
        }
    }
}

if(first !== null && second !== null){
    console.log(first);
    console.log(second);
    
}

if(first !== null && second == null){
    console.log('not found');
    
} 