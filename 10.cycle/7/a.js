let arr = [2, 5, 9, 15, 0, 4];
let res = [];

for(let el of arr){
    el % 3 == 0 ? res.push(el) : null;
    
}

console.log(res);
