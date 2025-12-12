let arr = [2, 3, 4, 5];
let res = 1;

// for(let i = 0; i < arr.length; i++){
//     res *= arr[i];
    
// }

// console.log(res);

// let i = 0;

// while(i < arr.length){
//     res *= arr[i];
//     i++
// }

for(let el of arr){
    res *= el;
}

console.log(res);
