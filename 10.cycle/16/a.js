let a = prompt().split("");
let b = [];

for (let i = 0; i < a.length; i++) {
    b.push(a[i]);
    i < a.length - 1 && a[i] % 2 !== 0 && a[i + 1] % 2 !== 0 ? b.push(":") : null;
}
console.log(b);
