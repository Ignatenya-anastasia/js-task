let arr = [-1, 2, 3, -4, 5];
let res = 0;

for (let el of arr) {
    el > 0 ? (res += el) : null;
}

console.log(res);