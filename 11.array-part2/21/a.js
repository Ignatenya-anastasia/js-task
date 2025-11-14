let num = +prompt();
let arr = [];

for(let i = 0; i < num; i++){
    arr.push(prompt());
}

const res = arr.reduce(function(s, el){
    if(el > s){
        return (s = el);
    }
}, 0)

console.log(res);
