let a = prompt().toLowerCase;
let b = ['a', 'e', 'i', 'o', 'u'];
res = 0;

for(let i = 0; i < a.length; i++){
if(b.includes(a[i])){
    res -= 1
}
}

console.log(res);
