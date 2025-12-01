const arr = [5, 10, 15, 20, 25];

function doSum (arr){
    if(arr.length === 0) return 0;
    return arr[0] + doSum(arr.slice(1))
    
}

console.log(doSum(arr));
