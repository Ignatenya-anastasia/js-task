let a = [];
let res = '';

for(let i = 0; i < 10; i++){
    a.push(prompt());
    res += `${a[i]}-`
}

console.log(res);