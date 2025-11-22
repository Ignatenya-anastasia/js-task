(function(arr, num){
    for(let i = 0; i < 5; i++){
        arr.push(+prompt());
    };
    const res = arr.filter(function(el){
        if(el > num){
            return true;
        } else {
            return false
        }
    })
    console.log(res);
    
})([], prompt());