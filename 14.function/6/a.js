// function checkNum() {
//     let arr = [];
//     for (let i = 0; i < 5; i++) {
//         arr.push(prompt());
//     }
//     return arr;
// }

// function doSum() {
//     const arr = checkNum()
//     const res = arr.every(function (el) {
//         if (!isNaN(el)) return true;
//         else return false;
//     })

//     if (res === true) {
//         const result = arr.reduce(function (s, el) {
//             return (s += el);
//         }, 0);

//         console.log(result);

//     }


// }

// doSum()


function checkArr() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(+prompt());
    };

    return arr;
};

function doSum() {
    const number = checkArr()
    const res = number.every(function (el) {
        return !isNaN(el) ? true : false
    })

    if (res === true) {
        const result = number.reduce(function (sum, el) {
            return sum += el;
        }, 0);

        console.log(result);
        
    }
}

doSum()