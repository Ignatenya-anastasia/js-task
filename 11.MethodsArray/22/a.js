let num = +prompt();
let arr = [];

for(let i = 0; i < num; i++){
    arr.push(prompt());
}

const res = arr.map(function(el){
    return (el *= el);
})

console.log(res);
