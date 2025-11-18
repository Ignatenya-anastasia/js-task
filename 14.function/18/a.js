let str = prompt();

const doStr = () => {
    return str.split("/").reverse().join("-");
    
}
const result = doStr();

console.log(result);
