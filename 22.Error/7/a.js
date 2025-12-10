let str = 'Hello';
let regex = /(e)|(o)|(i) /gm;

function check(){
    try{
        if(!isNaN(str)) throw new Error('str - is not a string');
    } catch(error){
        console.log(error);
        
    }

    try{
        console.log(str.replaceAll(regex, ''));
        
    } catch(error){
        console.log(error);
        
    }
}

check();