const a = +prompt();
const sqrt = Math.sqrt(a);
if(Number.isInteger(sqrt)){
console.log(sqrt);
}else{
    
    console.log(sqrt.toFixed(2));
}