let arr = [1, [2, [3, 4]], 5].flat(Infinity)
let i = 0;
let sum = 0;

function doSum(){
    if(i >= arr.length) return;
    sum += arr[i];

    i++
    doSum()
}

doSum()
console.log(sum);
