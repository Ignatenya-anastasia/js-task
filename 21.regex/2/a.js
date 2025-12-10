const reg = /^[A-Z][a-z]+ [A-Z][a-z]+ [\d]{1,2}/gm;
const str = 'Ign Nastya 24';

function check(){
    return reg.test(str) ? true : false;
}

const res = check();
console.log(res);
