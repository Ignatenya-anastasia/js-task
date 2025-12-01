// function doCount (n){
//     if(n > 10) return;
//     if(n % 2 == 0){
//         console.log(n);
//     }
//     doCount(n + 1)
// }
// doCount(0)



function doCount(n){
    if(n > 10) return;
    console.log(n);

    doCount(n + 2)
    
}

doCount(0)