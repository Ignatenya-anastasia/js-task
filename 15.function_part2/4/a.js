

function doArr() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

function checkArr(arr1) {
    const check = arr1.every(function (el) {
        if (el % 3 && Number.isInteger(el)) {
            return true
        } else {
            return false;
        }
    })
    return check;
}

function doSum() {
    const arr1 = doArr();
    const res = checkArr(arr1);

    if (res === true) {
        let i = 0;
        let sum = 0;
        while (i < arr1) {
            sum += arr1[i];
            i++
        }
        return sum;
    } else {
        return 'error'
    }


}

const result = doSum();

console.log(result);
