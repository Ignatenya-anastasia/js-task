function findNum(num1, num2){
    try{
        if(isNaN(num1) && isNaN(num2) && Number.isInteger(num1) && Number.isInteger(num2)) throw new Error ('Ведите корректно данные');

        let i = 1;
        function res(){
            if(i % num1 == 0 && i % num2 == 0) return console.log(i);
            i++;
            return res()
        }
        res()
    }catch(error){
        console.log(error);
        
    }


}

findNum(6, 8)