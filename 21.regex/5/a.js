const reg = /^https:\/\/[\w]+\.[\w]+/gmi;
const str = 'https://gdhdh.com';

function check(){
    return reg.test(str) ? true : false;
}

const res = check();
console.log(res);
