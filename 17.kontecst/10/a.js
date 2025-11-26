const obj = {
    n: +prompt(),

    isEven: () => (obj.n % 2 == 0 ? true : false),

    printEvenCheck: function(){
        const res = this.isEven();
        console.log(res);
        
        res == true ? console.log('чётное') : console.log('нечётное');
    }
};

obj.printEvenCheck();