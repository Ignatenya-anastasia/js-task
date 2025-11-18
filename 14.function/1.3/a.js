let arr = [];

const doArr = () => {
    for(let i = 0; i < 3; i++){
        arr.push(prompt());
    }
    return arr;
}
doArr();

function checkArr () {
    let newArr = [];
    const res = arr.filter((el) => (el[0] === el[0].toUpperCase() ? newArr.push(el) : null));
    return newArr
    
}

const result = checkArr()

console.log(result);

