let arr = [
    { name: "Alice", grades: [5, 4, 5] },
    { name: "Bob", grades: [3, 4, 4] },
    { name: "Charlie", grades: [5, 5, 5] },
];

function checkArr() {
    const check = arr.every(function (el) {
        if (typeof el.name === "string") return true;
        if (el.grades.length !== 0) return true;

        const checkNum = arr(el.grades).every(function (el) {
            if (typeof el === "number") {
                return true;
            } else {
                return false;
            }
        });
    });
    return check;
}
// const result = checkArr();
// console.log(result);

function getGrade() {
    const res = checkArr();
    let newArr = [];

    if (res === true) {
        for (let i = 0; i < arr.length; i++) {
            const students = arr[i];
            for (let j = 0; j < students.grades.length; j++) {
                newArr.push(students.grades[j]);
            }
        }
    }
    const doSum = newArr.reduce(function (sum, el) {
        return (sum += el);
    }, 0);
    const average = doSum / newArr.length;
    return average;
}

const result = getGrade();

console.log(result);
