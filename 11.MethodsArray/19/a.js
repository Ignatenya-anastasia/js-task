let num = +prompt();
let arr = [];

let i = 0;
while(i < num){
    arr.push(prompt());
    i++
}

const res = arr.reduce(function(s, el){
    if(!isNaN(el)){
        return (s += 1);
    } else {
        return (s += 0);
    }
}, 0)

console.log(res);
