function name(...arr) {
    const res = arr.map(function(el){
        return el.toUpperCase()
    });
    console.log(res);
    
}

name('apple', 'banana', 'cherry')