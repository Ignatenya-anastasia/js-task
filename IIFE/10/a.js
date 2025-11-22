function doArr (){
    let arr = [];
    for(let i = 0; i < 5; i++){
        arr.push(+prompt());
    }
    return arr;
}

function findNum (){
    const arr = doArr();
    const res = arr.filter((el) => (el % 2 == 0 ? true : false));
    return res;
};

const result = findNum();

console.log(result);
