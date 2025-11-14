let num = +prompt();
let a = [];

for(let i = 0; i < num; i++){
    a.push(prompt());
}


const res = a.every(function(el){
    return el % 2 == 0 ? true : false
})

console.log(res);
