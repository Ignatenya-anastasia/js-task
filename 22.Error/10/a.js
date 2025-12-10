let arr = [1, 2, 2, 3, 4, 4, 5];
let newArr = [];

function findSum (){
    try{
        const res = arr.every((el) => {
            if(typeof el === 'string') throw new Error('el - not a number');
        });
        arr.forEach((el) => {
            !newArr.includes(el) ? newArr.push(el) : null;
        });
        
        const result = newArr.reduce((sum, el) => {
            return sum += 1;
        }, 0);
        console.log(result);
        return result;
    
    } catch (error){
        console.log(error);
        
    }
}

findSum();