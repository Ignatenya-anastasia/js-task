
const doStr = (arr, str) => {
    arr = arr.split('');

    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0) str += arr[i].toUpperCase();
        else str += arr[i].toLowerCase(); 
    }
    return str;
    
}
const result = doStr(prompt(), '');
console.log(result);

