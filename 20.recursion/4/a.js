function doArr(arr){
    if(arr.length === 0) return;
    console.log(arr[0]);
    doArr(arr.slice(1))
}

const arr = [5, 10, 15, 20, 25];
doArr(arr)