function doArr(){
    let arr = [];
    for(let i = 0; i < 6; i++){
        arr.push(+prompt());
    }
    return arr;
};

function findNum (){
    const arr = doArr();
    let num1 = 0;
    let num2 = 0;
    arr.forEach(function(el){
        if(el > 0){
            num1 += 1;
        } else{
            num2 += 1;
        }
    })
    console.log(num1);
    console.log(num2);
    
    
}

findNum();