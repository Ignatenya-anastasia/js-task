function doArr(n){
    if(n === 10){
        return '10';
    } else {
        return n + ' ' + doArr(n + 1)
    }
}

console.log(doArr(0));


