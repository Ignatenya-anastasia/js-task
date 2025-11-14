let arr = [];

for(let i = 0; i < 10; i++){
    arr.push(prompt());
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 3 == 0 || arr[i] % 5 == 0){
        console.log(arr[i]);
        
    }
}