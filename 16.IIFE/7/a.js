(function(arr){
    let arr1 = ["один", "два", "три"];
    let array = [];
    for(let i = arr1.length - 1; i >= 0; i--){
        array.push(arr1[i]);
    }
    console.log(array);
    
})([]);