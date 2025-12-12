let a = [];
let b = [];

let i = 0;
while(i < 3){
    a.push(prompt());
    i++
};

let j = 0;
while(j < 3){
    b.push(prompt());
    j++
}

const res = [...a, ...b];

console.log(res);
