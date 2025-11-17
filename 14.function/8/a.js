function doArr(n){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(prompt())
    }

    return arr;
}

function doValue(){
    const arr1 = doArr(prompt());

    if(arr1.length !== 0){
        console.log(arr1.length);
        
    }
}

doValue()