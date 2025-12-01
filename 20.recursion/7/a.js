function doArr (n){
    if(n < 0) return '';
    if(n % 2 == 0){
        return n + ' ' + doArr(n - 1)
    } else {
       return doArr(n - 1)
    }
}

console.log(doArr(5));
