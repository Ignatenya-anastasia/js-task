const a = +prompt();
const b = +prompt();

if(a % b == 0){
    console.log('Делится');
} else {
    console.log('Делится с остатком', a % b);
}