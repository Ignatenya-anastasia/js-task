function doNum (arr, num){
    for(let i = 1; i <= num; i++){
        arr.push([i]);
    };

    return arr.join('*')
}

const result = doNum([], +prompt());
console.log(result);
