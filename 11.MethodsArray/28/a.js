let num = +prompt();
let a = [];

for(let i = 0; i < num; i++){
    a.push(prompt());
}

const res = a.map(function(el){
    return el.toUpperCase()
})

console.log(res);
