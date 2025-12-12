let arr = [
        ["level", "apple"],
        ["radar", "banana"]
        ];

let count = 0;

for(let i = 0; i < arr.length; i++){

    for(let j = 0; j < arr[i].length; j++){
        let str = arr[i][j];

        if(str === str.split('').reverse().join('')){
            count += 1;
        }
    }
}

console.log(count);
