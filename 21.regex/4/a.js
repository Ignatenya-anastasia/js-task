const reg = /^[\w\_\-]+@[a-z]+\.[a-z]+$/gmi;
const str = 'hdhdhhd@mail.com';

function check(){
    return reg.test(str) ? true : false;
}

const res = check();
console.log(res);
