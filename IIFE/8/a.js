(function(){
    let arr1 = [-2, 5, 3, -1, 0, 4];
    const fill = arr1.filter((el) => (el > 0 ? true : false));
    const res = fill.reduce(function(sum, el){
        return sum + el;
    }, 0);
    console.log(res);
    
})();