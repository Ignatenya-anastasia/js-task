let arr = [];

function doArr(){
    for(let i = 0; i < 5; i++){
        arr.push(prompt());
    }
    return arr;
}
doArr();

const checkArr = () => {
    let newArr = [];
    const res = arr.filter((el) => (typeof el === 'string' && el.length > 2 ? newArr.push(el) : null));
        
    return res
}

const result = checkArr();

console.log(result);
