function checkArr (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += +arr[i];
    }
    return sum;
};

function main (){
    let arr = ['12', '49', '123', '88', '305'];
    
    const num = arr.filter(function(el){
        if(checkArr(el) > 10){
            return true;
        } else{
            return false;
        }
    })
    console.log(num);
    
}

main();