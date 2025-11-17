function doArray(arr) {
    for (let i = 0; i < 5; i++) {
        array.push(prompt());
    }
}

let array = [];
const resArr = doArray(array)


function doSum() {
    const resCheck = array.every(function (el) {
        if (isNaN(el)) {
            return true;
        }
    })

    if (resCheck === true) {
        const sum = array.reduce(function (s, el) {
            return s += el;
        }, ' ')

        console.log(sum);
    }
}

doSum()