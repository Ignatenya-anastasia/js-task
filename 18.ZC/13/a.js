function makeMultiplier(x){
    return function(num){
        console.log(x * num);
        
    }
}

const res = makeMultiplier(2);
res(5);
res(3);
res(7);