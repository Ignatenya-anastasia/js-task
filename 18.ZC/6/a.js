function checkEven(label){
    return function(num){
        return num % 2 == 0 ? `${label}: true` : `${label}: false`;
    }
}

const res = checkEven('result')(4);
console.log(res);

