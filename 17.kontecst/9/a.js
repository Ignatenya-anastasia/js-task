const obj = {
    n: +prompt(),

    toPow: function(){
        const pow = this.n ** 2;
        return pow;
    },

    printPow: function(){
        const res = this.toPow()

        console.log(res);
        
    }
    

}

obj.printPow()