function chekSymb (){
    let str = prompt();

    let obj = {}

    for(let el of str.split('')){
        if(obj[el]) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    }
    let arr = [];
    for(let el in obj){
        if(obj[el] == 1){
            arr.push(el);
        }
    }
    console.log(arr);
    
}

chekSymb();

