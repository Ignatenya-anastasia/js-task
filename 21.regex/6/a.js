const reg = /^C:\\[\w]+\\[\w]+\\[\w]+\\[\w]+\.[\w]+/gm;
const str = 'C:\\Users\\Admin\\Desktop\\test.txt';

function check(){
    return reg.test(str) ? true : false;
}
const res = check();
console.log(res);

