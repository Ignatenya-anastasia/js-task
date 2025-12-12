const obj = {
    orderId: 10,
    status: 'active',

    printStatus: function(){
        console.log(`Заказ ${this.orderId} : ${this.status}`);
        
    }
};

obj.printStatus();