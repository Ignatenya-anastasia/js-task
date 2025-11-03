let array = ["no", "yes", "Apple"];

for(let i = 0; i < array.length; i++){
    if(array[i][0] === 'A' || array[i][0] === 'Z'){
        console.log(array[i]);
        break;
    } else{
        console.log('Not found');
        
    }

    
}