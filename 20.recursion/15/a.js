let str = 'Hello';
let i = 0;

function doStr(){
    if(i > str.length) return;
    return str.split('').reverse().join('');

    i++;
    doStr();
}

console.log(doStr());
