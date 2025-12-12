function result(arr) {
    if (arr.length === 0) return undefined;

    const obj = {};
    for (const el of arr) {
        obj[el] = (obj[el] || 0) + 1;
    }

    let maxEl = arr[0];
    let maxCount = 0;

    for (const el in obj) {
        if (obj[el] > maxCount) {
            maxCount = obj[el];
            maxEl = +el; 
        }
    }

    return maxEl;
}

console.log(result([1, 2, 3, 1, 2, 2, 1])); 
// console.log(result([5, 5, 6, 6, 6, 7]));    