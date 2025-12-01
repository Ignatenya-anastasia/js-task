let str = 'banana'.split('');
let i = 0;
let sum = 0;

function doSum(){
    if(i >= str.length) return;
    sum + 1;

    i++;
    doSum()
}

doSum()
console.log(sum);


