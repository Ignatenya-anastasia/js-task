const a = 10;
let b = '';
let n = prompt();
let res = '';

for(i = 0; i < a; i++){
    b += '*';
}

for(i = 0; i < n; i++){
    res += `${b}\n`;
}

console.log(res)