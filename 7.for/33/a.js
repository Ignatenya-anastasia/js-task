let array = ["go", "keep", "STOP", "wait"];

for(let i = 0; i < array.length; i++){
    if(array[i].toLowerCase() == 'stop'){
        break;
    }
    console.log(array[i]);
}