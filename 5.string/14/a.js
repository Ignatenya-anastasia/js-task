const a = prompt();
const b = prompt();

a == b ? console.log('Равны') : Math.max(a, b) == a ? console.log(a) : console.log(b);