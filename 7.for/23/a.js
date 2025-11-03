let arr = [1, 2, 3, 4, 5];
let num1 = 0;
let num2 = 0;

for(let i = 0; i < arr.length; i++){
    if(i % 2 == 0){
        num1 += 1;
        
    } 
    if(i % 2 != 0){
        num2 += 1;
        
        
    }
}
console.log(`${num1} четных, ${num2} нечетных чисел`);
