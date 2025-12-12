let a = [];
let b = +prompt();

let i = 0;
while(i < b){
    a.push(+prompt());
    i++
}

function sum(...arr) {
    const res = arr.reduce(function(s, el){
        return (s += el);
    }, 0);

    console.log(res);
    
}

sum(...a);
