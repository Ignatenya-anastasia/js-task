function checkNum(num){
    try{
        if(isNaN(num)) throw new Error('num - is nit a number');
    } catch (error){
        console.log(error);
    }

    try{
        const mapNum = String(num).split('').map((el) =>{
            if(el < 0) throw new Error ('num < 0');
            return el ** 2;
        });
        console.log(mapNum.join(''));
        
    } catch(error){
        console.log(error);
        
    }
}

checkNum(prompt());