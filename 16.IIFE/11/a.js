function doArr (){
    let arr = [];
    for(let i = 0; i < 5; i++){
        arr.push(+prompt());
    };
    return arr;
};

function findMax (){
    const arr = doArr();

    const res = arr.reduce(function(max, el){
        if(el > max) return el;
        else return max;
    }, 0);
    return res;
}

const result = findMax();
console.log(result);
