let num = +prompt();
let a = [];

for(let i = 0; i < num; i++){
    a.push(+prompt());
}

const res = a.reduce(function(s, el){
    if(!isNaN(el) && el < s){
        return (s = el);
    }
    return ('not a number');
}, +Infinity)

console.log(res);
