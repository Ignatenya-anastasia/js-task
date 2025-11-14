let a = +prompt();
let b = [];

for(let i = 0; i < a; i++){
    b.push(prompt());
}

const res = b.filter(function(el){
    if(el[0] == 'h' || el[0] == 'a'){
        return true;
    } else return false;
    
});

console.log(res);
