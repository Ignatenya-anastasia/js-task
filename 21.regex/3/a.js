let str = 'hi hello good';
let reg = / /gm;

function check(){
    return str.replaceAll(reg, '')
}
const res = check();
console.log(res);
