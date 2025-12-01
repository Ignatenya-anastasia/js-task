function greaterThanX(x){
    return function(num){
        return num > x ? true : false;
    }
}
const res = greaterThanX(5)(10);
console.log(res);
