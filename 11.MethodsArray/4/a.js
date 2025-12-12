let a = +prompt();
let b = [];

for(let i = 0; i < a; i++){
    b.push(prompt());
    if(isNaN(b[i])){
        console.log('not a number');
        break;
    }
}

const res = b.reduce(function(s, el){
    return (s *= el);
}, 1);

console.log(res);
