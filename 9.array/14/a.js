let arr = [0,1,0,3,12];
let res = [];


for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        res.push(arr[i]);
    }
}

for(let i = 0; i <= (arr.length - arr.length); i++){
    res.push(0);
}

console.log(res);

