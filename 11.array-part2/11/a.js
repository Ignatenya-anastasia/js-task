let a = +prompt();
let b = [];

for(let i = 0; i < a; i++){
    b.push(prompt());
    if(!isNaN(b[i])){
        console.log('not a word');
        break;
    }
}

const res = b.map(function(el){
    return `#${el}`;
})

console.log(res);
