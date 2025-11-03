let array = [10, 20, 30, 40, 50];
let num = prompt();
let res = false;
for(let i = 0; i < array.length && res==false; i++){
    if(array[i] == num){
        res = true;
    }
}

console.log(res);

