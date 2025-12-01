function multiply(a){
    return function (b){
        return function (c){
            console.log(a * b * c);
            
        }
    }
}

multiply(1)(2)(3)