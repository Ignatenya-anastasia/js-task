function check (arr){
    try{
        arr.every((el) => {
            if(isNaN(el)) throw new Error('array includes string');
        });
        const res = arr.map((el) => (el < 0 ? 0 : el));
        console.log(res);
        
    }catch(error){
        console.log(error);
        
    }
}

check([-1, 2, -3, 4])