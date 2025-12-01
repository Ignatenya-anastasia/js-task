let arr = ['1', '2', '3', '4'];
let i = 0;
let sum = 0;

function findSum(){
    if(i == arr.length) return;
    if(arr[i].split('').reverse().join('') === arr[i]) {
        sum += +arr[i]
    }
    i++;
    findSum()
}

findSum()
console.log(sum);
