let v1 = +prompt();
let v2 = +prompt();
let s = +prompt();

// if (!isNaN(v1) && !isNaN(v2) && !isNaN(s)) {
//     console.log(s / (v1 + v2));
// } else {
//     console.log('correct your properties');
// }

!isNaN(v1) && !isNaN(v2) && !isNaN(s) ? console.log(s / (v1 + v2)) : console.log('correct your properties');