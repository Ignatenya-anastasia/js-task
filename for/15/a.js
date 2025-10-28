let words = prompt()
words = words.split(' ');
let res = '';

for(i = 0; i < words.length; i++){
    res += ` ${words[i][0].toUpperCase() + words[i].slice(1)} `;
}
console.log(res);