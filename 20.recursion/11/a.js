let  arr = [1, 2, 3, 4];
let i = 0;
let sum = 0;

function countEl(){
    if( i == arr.length) return;
    sum += 1;
    i++;
    countEl();
};

countEl()
console.log(sum);
