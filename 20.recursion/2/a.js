function doSum(n){
    if(n < 0) return;
    console.log(n);
    doSum(n - 1)
    
}

doSum(10)