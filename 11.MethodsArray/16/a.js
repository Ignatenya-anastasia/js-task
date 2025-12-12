let a = [];
let b = [];
let c = +prompt();
for(let i = 0; i < c; i++){
    a.push(prompt());
}
for(let i = 0; i < 1; i++){
    b.push(prompt());
}

const res = [...b, ...a];

console.log(res);
