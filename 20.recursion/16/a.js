let arr = [1, 2, 3, 4];
let i = 0;
let n = 3;
let value = false;
function findNum(){
    if(i > arr.length) return;
    if(arr[i] === n){
        value = true;
        return;
    } else{
        value = false;
    }

    i++;
    findNum()
}
findNum()
console.log(value);
