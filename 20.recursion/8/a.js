let n = 5;
let i = 1;
let sum = 0;
function doSum (i){
    if(i > n){
        return;
    }
    sum += i;

    doSum(i + 1)
}

doSum(i)

console.log(sum);
