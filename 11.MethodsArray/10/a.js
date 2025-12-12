let a = +prompt();
let b = [];
let word = 'javascript';

for(let i = 0; i < a; i++){
    b.push(prompt())
    if(!isNaN(b[i])){
        console.log('not a word');
        break;
    }
}

let res = [];

b.forEach(function(el){
    if(el.includes(word)){
        res.push(el)
    }
})

console.log(res);
