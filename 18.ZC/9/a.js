function hasLength(n){
    return function(str){
        return str.length == n ? true : false;
    }
}

const res = hasLength(4)('lovee');
console.log(res);
