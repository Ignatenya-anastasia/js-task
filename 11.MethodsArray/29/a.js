let num = +prompt();
let a = [];

for(let i = 0; i < num; i++){
    a.push(+prompt());
}


const res = a.filter(function(el){
    return el > 0 ? true : false;
})

console.log(res);

