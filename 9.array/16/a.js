let arr = [1,2,3,4,5];
let res = false;

for(let i = 0; i < arr.length; i++){
    if(arr[i] < arr[i +1]){
        res = true;
    }
}

console.log(res);
