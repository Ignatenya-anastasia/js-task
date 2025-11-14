let num = +prompt();
let arr = [];

let i = 0;
while(i < num){
    arr.push(prompt());
    i++
}

const res = arr.reduce(function(s, el){
    return (s += `${el},`);
}, 0)

console.log(res);
