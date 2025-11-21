let num = +prompt();
let arr = [];

function doArr (){
    for(let i = 0; i < num; i++){
        arr.push(prompt());
    }
    
}

function checkArr () {
    doArr();
    const check = arr.every((el) => (isNaN(el) ? true : false));
    return check;
}

function findStr () {
    const res = checkArr();

    if(res === true){
        const str = arr.reduce((sum, el) => ((sum += 1), 0) ? str : console.log('not string'));
}
}

const result = findStr();

console.log(result);
