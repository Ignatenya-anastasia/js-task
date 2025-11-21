function doArr (){
    return [ { name: "Alice", salary: 50000 }, { name: "Bob", salary: 62000
        }, { name: "Charlie", salary: 48000 }, { name: "Diana", salary: 71000 } ];
}

function checkArr (arr) {
    const res = arr.every(function(el){
        if(el.salary > 0 && el.salary < 100000){
            return true;
        } else {
            return false;
        }
    })
    return res;
}

function findMax (){
    const arr = doArr()
    const check = checkArr(arr)

    if(check === true){
        const person = arr.reduce(function(max, el){
                if(el.salary > max){
                    return max = el.salary;
                } else {
                    return max;
                }
        }, 0)

        return person;
    } else {
        return 'error'
    }

}

const result = findMax();
console.log(result);
