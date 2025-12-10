const reg = /[A-Za-z\d\_\@]{8,}/gm;
const pass = 'hfhf_jdjj74';

function check(){
    return reg.test(pass) ? true : false;
}

const res = check();
console.log(res);
