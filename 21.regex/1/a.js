const reg = /^[\d]+/gm;
const str = '1234566';

function check(){
    return reg.test(str) ? true : false;
}
const res = check();
console.log(res);
