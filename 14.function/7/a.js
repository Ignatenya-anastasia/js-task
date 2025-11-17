function checkNum() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(+prompt());
    }

    return arr;
}


function doValue() {
    const res = checkNum();

    const result = res.every(function (el) {
        return !isNaN(el) ? true : false;
    })

    if (result === true) {
        const num = res.map(function (el) {
            return el ** 2;
        })

        console.log(num);
        
    }
}

doValue()
