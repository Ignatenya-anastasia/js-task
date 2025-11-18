let arr = [];
let num = +prompt();

const doArr = () => {
    for (let i = 0; i < num; i++) {
        arr.push(+prompt());
    }
    return arr;
}
doArr()

const checkArr = () => arr.every((el) => (!isNaN(el) && el > 0 ? true : false));

const findMin = () => {
    const res = checkArr();
    if (res == true) {
        let i = 1;
        let min = arr[0];
        while (i < arr.length) {
            if (arr[i] < min) {
                min = arr[i];
            }
            return min;
            i++
        }
    }
}

const result = findMin()
console.log(result);
