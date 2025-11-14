let obj = {};
let num = +prompt();
let arr = [];

for(let i = 0; i < num; i++){
    arr.push(+prompt())
}

let sum = 0;
arr.forEach(function(el){
    sum += el;
})

obj.sum = sum;

console.log(obj);
