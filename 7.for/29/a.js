let array = [1, 5, 13, 21, 8, 7, 14];

for(let i = 0; i < array.length; i++){
    if(array[i] % 7 == 0){
        console.log(array[i]);
        break;
    } else {
        console.log('Not found');
        
    }
    
    
}