(function(arr){
    for(let i = 0; i < 3; i++){
        arr.push(prompt());
    };
    const res = arr.reduce(function(sum, el){
        return (sum + el) / arr.length;
    }, 0);
    console.log(res);
    
}) ([]);