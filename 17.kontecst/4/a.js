const obj = {
    width: 100,
    higth: 70,

    getArea: function(){
        console.log(this.width * this.higth);
        
    }
};

obj.getArea()