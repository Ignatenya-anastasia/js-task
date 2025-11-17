let arr = ['by', 'belarus', 'de', 'ru', 'germany'];

function doArr(arr){
    const res = arr.filter(function(el){
        if (el.length <= 2) return true
        else return false

    })

    console.log(res);
    
}

doArr(arr)