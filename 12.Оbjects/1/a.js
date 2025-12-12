let text = "apple banana apple orange banana apple";
let text1 = text.split(' ');

// const res = text1.reduce(function(arr, el){
//     arr[el] = (arr[el] || 0) + 1;
//         return arr
    
// }, {})

// console.log(res);


let obj = {};

for(let word of text1){
    if(obj[word]){
        obj[word] += 1;
    } else {
        obj[word] = 1;
    }
}

console.log(obj);
