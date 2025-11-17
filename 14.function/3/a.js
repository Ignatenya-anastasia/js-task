function doUpp(string){
    string = string.split(' ');
    const res = string.map(function(el){
        return el[0].toUpperCase() + el.slice(1);
    });

    console.log(res.join(' '));
    
}

doUpp(prompt())