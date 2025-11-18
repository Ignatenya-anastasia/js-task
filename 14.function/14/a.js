let arr = [];

function doArr (){
    let n = +prompt();
    for(let i = 0; i < n; i++){
        arr.push(+prompt());
    }
    return arr;
}

const checkArr = () => arr.every((el) => (!isNaN(el) ? true : false));

function maxNum () {
    if(checkArr === tru){
        const findMax = arr.reduce((max, el) => (el > max ? (max = el) : max), -Infinity);
        console.log(findMax);
        
    }
    
}

maxNum()