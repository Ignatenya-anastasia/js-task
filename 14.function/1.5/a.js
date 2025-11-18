let arr = [[1, 2], [3], [4, 5]];

function checkArr() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const resCheck = arr[i].every((el) =>
                typeof el === "number" ? true : false
            );
            return resCheck;
        }
    }
}

checkArr();

// const result = checkArr();
// console.log(result);

function addMatrix() {
    const res = checkArr();

    if (res === true) {
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                newArr.push(arr[i][j]);
            }
        }

        return newArr;
    }
}

const result = addMatrix();

console.log(result);
