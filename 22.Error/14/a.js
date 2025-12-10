let letters = "abcdefghijklmnopqrstuvwxyz";
let arr =  ["a","b","c","d","f"];

function checkLetter(){
    try{
        if(arr.length === 0) throw new Error('Массив пуст');
        const isUpperCase = arr[0] === arr[0].toUpperCase();
        const toLower = arr.map((el) => (el.toLowerCase()));

        const start = letters.indexOf(toLower[0]);;
        const end = letters.indexOf(toLower[toLower.length - 1]);

        const podStr = letters.slice(start, end + 1);

        for(let el of podStr){
            if(!toLower.includes(el)){
                return isUpperCase ? el.toUpperCase() : el;
            }
        }
    } catch (error){
        console.log(error);
        
    }
}

const res = checkLetter();

console.log(res);
