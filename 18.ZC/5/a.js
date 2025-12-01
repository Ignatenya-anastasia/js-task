function greaterThan (x){
    return function(y) {
        return x > y ? true : false;
    }
}

const res = greaterThan(4) (1);
console.log(res);
