function isDivisibleBy(a){
    return function(b){
        return b % a == 0 ? true : false;
    }
}

const res = isDivisibleBy(2)(4);
console.log(res);


