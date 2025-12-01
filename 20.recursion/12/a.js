let n = 4;
let i = 1;
let fact = 1;

function doFact(){
    if(i > n) return;
    fact *= i;
    i++;
    doFact()
}

doFact();
console.log(fact);
