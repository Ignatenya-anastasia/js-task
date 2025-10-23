const a = prompt();
const b = prompt();

!isNaN(b) && a.length >= b ? console.log(a[b]) : console.log(" Индекс вне диапазона");