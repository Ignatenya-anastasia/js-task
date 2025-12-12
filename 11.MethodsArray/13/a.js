let a = +prompt();
let b = [];

for(let i = 0; i < a; i++){
    b.push(prompt());
}

const res = b.map(function(el){
    return el ** 2;
})

console.log(res);
