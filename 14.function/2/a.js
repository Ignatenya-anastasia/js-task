function doName(a, b, c){
    const arr = `${a} ${b} ${c}`.split(' ');
    const res = arr.map(function(el, i){
        if(i % 2 == 0){
            return el.toUpperCase();
        } else{
            return el.toLowerCase();
        }
    });

    console.log(res);
    
}

doName(prompt(), prompt(), prompt())