let obj = {"x": "hello", "y": 20, "z": 30};
let sum = 0;

for(let key in obj){
    if(!isNaN(obj[key])){
        sum += 1;
    }
}

console.log(sum);
