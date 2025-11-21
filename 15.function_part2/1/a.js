
let num = +prompt();

function doArr (){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(+prompt());
    }
    return arr;
}

function checkArr(){
    const arr1 = doArr()
    const res = arr1.every((el) =>  (!isNaN(el) ? true : false));

    if(res === true){
        const doNewArr = arr1.filter((el) => (el > 10 && el % 2 == 0) ? true : false);
        return doNewArr;
        }
}

const result = checkArr();

console.log(result);
