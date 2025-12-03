let arr = [1, 3, 2, 5, 4];

function findMax (array){
    if (array.length === 1) return array[0];

    const max = findMax(array.slice(1));

    return array[0] > max ? array[0] : max;
}

console.log(findMax(arr));
