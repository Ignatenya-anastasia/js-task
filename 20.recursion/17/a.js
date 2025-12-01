let arr = [1, [2, [3]], 4].flat(Infinity);
let i = 0;
let sum = 0;
function doArr(){
    if(i >= arr.length) return;
    sum += 1;

    i++;
    doArr()
}

doArr()
console.log(sum);
