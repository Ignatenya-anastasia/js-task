const obj = {
    n: +prompt(),

    sumToN: function(){
        let sum = 0;
        for(let i = 0; i < this.n; i++){
            sum += i;
        }
        console.log(sum);
        
    }
};

obj.sumToN()