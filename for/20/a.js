let array = [5, "hello", 15, "world", 25, 3, "test"];

for(let i = 0; i < array.length; i++){
    if(isNaN(array[i])){
        continue;
    }
    if(+array[i] < 10){
        console.log(`Маленькое число ${array[i]} `);
        
    }
    if(+array[i] >= 10 && array[i] < 20){
        console.log(`Среднее число ${array[i]}`);
        
    }
    if(+array[i] > 20){
        console.log(`Большое число ${array[i]}`);
        
    }
}