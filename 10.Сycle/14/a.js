let arr = [];

for (let i = 0; i <= 100; i++) {
    i % 7 == 0 ? arr.push(i) : null;
}

console.log(arr);