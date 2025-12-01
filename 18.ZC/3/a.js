function divideBy(x){
    return function(y){
        console.log(x / y);
        
    }
}

divideBy(8)(2)