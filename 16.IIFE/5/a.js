(function(num){
    let arr = ["cat", "dinosaur", "elephant", "dog"];
    
    const res = arr.filter(function(el){
        if(el.length > num){
            return true;
        } else {
            return false;
        }
    })
    console.log(res);
    
})  (+prompt());