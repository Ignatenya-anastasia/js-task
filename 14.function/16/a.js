let num = +prompt();
let arr = [];

const doArr = () => {
    for (let i = 0; i < num; i++) {
        arr.push(+prompt());
    }
}
doArr()

function checkArr() {
    const check = arr.every(function (el) {
        if (!isNaN(el)) {
            return true;
        } else {
            return false;
        }
    });

    return check;
}


function doNewArr (){
    const res = checkArr();
    let newArr = [];
    if(res === true){
        arr.forEach(function(el){
            if(el % 2 == 0){
                newArr.push(el ** 2);
            }
        })
        console.log(newArr);
        
    } else {
        console.log('error');
        
    }
    
    
}

doNewArr();