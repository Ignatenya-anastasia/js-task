let num = 2;

function checkNum (){
    try{
        if(isNaN(num) || num % 2 !== 0) throw new Error('число нечечтное');
    else console.log(num);
    } catch (error) {
        console.log(error);
        
    }
    
}

checkNum();