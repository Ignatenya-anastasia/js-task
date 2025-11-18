let num = +prompt();
let arr = [];

const doArr = () => {
    for(let i = 0; i < num; i++){
        arr.push(prompt());
    }
}
doArr();

function checkArr (){
    const check = arr.every((el) => !isNaN(el) ? true : false)

    return check;
}

function newArr(){
    const res = checkArr();

    if(res === true){
        const number = arr.reduce((sum, el) => (sum *= el), 1);

        console.log(number);
        
    } else {
        console.log('error');
        
    }
}

newArr();


