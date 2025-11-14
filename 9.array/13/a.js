let arr = [2,5,3,5,1,5];
let res = [];
let max = 0;

for(let i = 0; i < arr.length; i++){
    if(max > arr[i]){
        continue;
    }
    max = arr[i];
}

for(let i = 0; i < arr.length; i++){
    if(max == arr[i]){
        res.push(i);
    }
}

console.log(res);
