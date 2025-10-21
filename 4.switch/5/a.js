// let a = prompt();

// if (isNaN(a)) {
//     console.log(Math.sqrt(a));
// } else if (!Number.isInteger(a)) {
//     console.log(Math.round(Math.sqrt(a)));
// }

const num = prompt();

isNaN(num) ? console.log(!Number.isInteger(num)) : console.log(Math.round(Math.sqrt(num)));