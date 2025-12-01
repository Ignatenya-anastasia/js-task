function rememberNumber(n){
    return function(){
        console.log(n);
        
    }
};

const res = rememberNumber(4);
res();
res();
res();