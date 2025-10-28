const array =  [1, 'hi', 2, 'hello', 3];

for ( let i = 0; i < array.length; i++){
    if(isNaN(array[i])){
        console.log(`Строка ${array[i]}`)
    } else{
        console.log(`Число ${array[i]}`);
    }
}