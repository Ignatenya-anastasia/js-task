let arr = [1, 2, 4, 'd'];

function checkErray(){
    try{
        const checkEl = arr.some((el) => (typeof el === 'string') ? true : false);

        if(checkEl === true) throw new Error('array includes string');
        else console.log('array don\'t have string');
    }catch (error){
        console.log(error);
        
    }
}

checkErray()