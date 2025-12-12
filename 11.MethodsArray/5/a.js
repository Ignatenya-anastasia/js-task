let a = +prompt();

let b = [];

for(let i = 0; i < a; i++){
    b.push(prompt());
}

const res = b.some(function(el){
    return !isNaN(el) ? true : false
});

console.log(res);
