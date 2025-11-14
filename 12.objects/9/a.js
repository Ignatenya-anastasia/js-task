let obj = {"a": 1, "b": 2, "c": 4};
let a = [];

for(let key in obj){
    if(!isNaN(obj[key]) && obj[key] % 2 == 0){
        a.push(obj[key])
    }
}

console.log(a);
