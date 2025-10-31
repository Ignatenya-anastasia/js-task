let array = [4, 3, -2, 7];

for(let i = 0; i < array.length; i++){
    if( array[i] < 0){
        console.log(i);
        break;
    } else{
        console.log(-1);
        
    }
}
