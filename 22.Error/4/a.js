let n = +prompt();

function doArr (arr){
    try{
        if(isNaN(n)) throw new Error('n - not a number');

        for(let i = 0; i < n; i++){
            arr.push(Math.random() * 100);
        }

        arr.forEach((el) =>{
            if(isNaN(el)) throw new Error ('not a number');
            if(el < 0) throw new Error('number < 0');
        });
        console.log(arr);
    } catch (error){
        console.log(error);
        
    }
}

doArr([])