let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];

let res = [];

for(let i = 0; i < arr.length; i++){
    if(!res.includes(arr[i])){
        res.push(arr[i]);
    }
}

console.log(res);
