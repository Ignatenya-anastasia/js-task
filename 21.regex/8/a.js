const reg = /[A-Za-z]/gm;
const str = 'jdhdn58';

function check(){
    const res = str.replaceAll(reg, '');

    if(str.length !== res.length){
        return true;
    } else{
        return false;
    }
}

const result = check();
console.log(result);
