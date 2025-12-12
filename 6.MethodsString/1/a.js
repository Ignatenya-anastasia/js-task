const string = prompt();

if(isNaN(string)){
    console.log(string.split(''));
    
}else{
    if(string % 2 == 0){
        console.log('Четное число');
    } else{
        console.log('Нечетное число');
        
    }
}