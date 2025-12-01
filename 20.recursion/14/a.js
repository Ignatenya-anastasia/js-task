let i = 0;
let arr = [1, 2, 3, 4] ;
let sum = 0;

function findMax(){
    if ( i == arr.length) return;
    sum < arr[i] ? (sum = arr[i]) : sum;

    i++;
    findMax()
}

findMax();
console.log(sum);
