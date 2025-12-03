function findStr(str){
    if(str.length === 1) return str[0];

    const longStr = findStr(str.slice(1));

    return str[0].length >= longStr.length ? str[0] : longStr;
}

console.log(findStr(["hi", "hello", "hey"]));
