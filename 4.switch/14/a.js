let a = prompt();
let b = prompt();
let c = prompt();

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    if (a === b && b === c && a === c) {
    console.log("Равносторонний треугольник");
} else if (a == b || a == c || b == c) {
    console.log("Равнобедренный");
} else if (a + b < c || a + c < b || b + c < a) {
    console.log("Треугольник не существует");
} else if (a != b && b != c && a != c) {
    console.log("Разсносторонний");
}
} else {
console.log("не число");
}