function doCount (n){
    if(n > 10) return;
    console.log(n);
    doCount(n + 1)
    
    
}

doCount(0);
