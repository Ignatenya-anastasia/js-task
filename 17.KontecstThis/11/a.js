const obj = {
    n: +prompt(),

    factorial: function(){
        let fact = 1;

        for(let i = 0; i < this.n; i++){
            fact *= i;
        }
        return fact;
    },

    printFactorial: function(){
        const res = this.factorial();
        console.log(res);
        
    }
}

obj.printFactorial()