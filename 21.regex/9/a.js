const reg = /([\d]{6})|([\d]{4})/gm;
const pin = '1234';

function check(){
    return reg.test(pin) ? true : false;
}

const res = check();
console.log(res);

