let arr = [101,20,303,430,50,60];
let res = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 100){
        res.push(arr[i]);
    }
}

console.log(res);
