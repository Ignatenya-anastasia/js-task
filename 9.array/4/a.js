let arr = [2, 5, 9, 15, 0, 4];
let res = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 3 == 0){
        res.push(arr[i]);
        
    }
}

console.log(res);
