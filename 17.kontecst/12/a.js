const obj = {
    str: prompt(),

    reverseStr: function(){
        return this.str.split("").reverse().join("");
    },

    printReversed: function(){
        const res = this.reverseStr();
        console.log(res);
        
    }
}

obj.printReversed();