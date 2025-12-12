const a = +prompt();
const b = +prompt();
const c = +prompt();

const D = b ** 2 - (4 * a * c);

if(D > 0){
    const x1 = (-b - Math.sqrt(D)) / (2 * a);
    const x2 = (-b + Math.sqrt(D))  / (2 * a);
    console.log(Math.min(x1, x2));
} else if(D == 0){
    const x = -b / (2 * a);
    console.log(x);
}else {
    console.log('Не имеет корней');
}
