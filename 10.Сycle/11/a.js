let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let res = [];

for (let el of arr) {
    !res.includes(el) ? res.push(el) : null;
}

console.log(res);