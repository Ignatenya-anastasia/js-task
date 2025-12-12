let num = +prompt();
let a = [];

let i = 0;
while(i < num){
    a.push(prompt());
    i++
};

const res = a.reduce(function(s, el){
    return s *= el;
}, 1);

console.log(res);
