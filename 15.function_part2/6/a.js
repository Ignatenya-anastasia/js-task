function doArr() {
    return [
        { name: "Alice", grades: [85, 92, 78] },
        {
            name: "Bob",
            grades: [90, 88, 95],
        },
        { name: "Charlie", grades: [70, 75, 80] },
        { name: "Diana", grades: [98, 94, 99] },
    ];
}

function checkArr(arr) {
    const check = arr.every(function (el) {
        if (typeof el.name === "string") return true;
        if (el.grades.length !== 0) return true;

        const checkNum = arr(el.grades).every(function (el) {
            if (typeof el === "number") return true;
        });
    });
    return check;
}

function doNum(arr) {
    const newArr = arr.map(function (el) {
        const number = el.grades.reduce(function (s, el) {
            return (s += el);
        }, 0);

        const averagee = number / el.grades.length;

        return {
            name: el.name,
            average: averagee,
        };
    });
    return newArr;
}

function main() {
    const arr = doArr();
    const res = checkArr(arr);

    if (res === true) {
        const ball = doNum(arr);

        const fill = ball.filter(function (el) {
            return el.average > 80;
        });
        return fill;
    } else {
        console.log("error");
    }
}

const resultAverage = main();

console.log(resultAverage);

// function checkArr(arr) {
//     const check = arr.every(function (el) {
//         if (typeof el.name === 'string' && el.grades.length > 1) {
//             return true;
//         } else {
//             return false;
//         }
//     })
//     return check
// }

// function doNum(arr) {
//     let average = 0;
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].grades.length; j++){
//             average = (average + arr[i].grades[j]) / arr[i].grades.length;
//         }
//     }
//     return average;
// }

// function main() {
//     const arr = doArr();
//     const resChek = checkArr(arr);
//     if (resChek === true) {
//         const ball = doNum(arr)

//     } else {
//         console.log('error');

//     }

// }

// main()
