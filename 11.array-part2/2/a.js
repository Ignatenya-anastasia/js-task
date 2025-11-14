const arr = [2, 3, 4, 5, 6, 4, 5];
const a = [];
const b = [];

for(let i = 0; i < arr.length; i++){
    if(i < 5){
        a.push(arr[i]);
    } else{
        b.push(arr[i]);
    }
}

const res = a.filter(function (el) {
    return b.includes(el) ? false : true;
    
})

console.log(res);
