let a = +prompt();
let res = [];
let b = [];
let c = [];

for(let i = 0; i < a; i++){
    res.push(prompt());
}

res.forEach(function(el){
    if(!isNaN(el)){
        b.push(el);
    } else {
        c.push(el);
    }
})

console.log(b);
console.log(c);


