let word = "banana";
let word1 = word.split('');

const res = word1.reduce(function(arr, letter){
    arr[letter] = (arr[letter] || 0) + 1;
    return arr
}, {});

console.log(res);
