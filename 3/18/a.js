const a = +prompt();

const num = Math.sqrt(a);

if(Number.isInteger(num)){
    console.log(num);
} else{
    console.log(num.toFixed());
}