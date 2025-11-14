let arr = [
    ["cat", "banana"],
    ["orange", "kiwi"]
];

let vowels = ['a', 'e', 'i', 'o', 'u']

let maxVowels = -1;
let resultStr = '';


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        let str = arr[i][j];
        let vowelCount = 0;

        for (let el of str) {
            if (vowels.includes(el)) {
                vowelCount += 1;
            }
        }


        if (vowelCount > maxVowels) {
            maxVowels = vowelCount;
            resultStr = str;
        }
    }
}

console.log(resultStr); 