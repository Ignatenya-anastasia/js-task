const a = +prompt();
let b = +prompt();

if (!isNaN(a) && !isNaN(b)) {
    console.log("I am", a + b);
} else {
    console.log("Не число");
}