function checkArr (){
    let arr = [121, 202, 345, 11, 99];
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        const str = String(arr[i]).split('').reverse().join('');
        if(str == String(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
const res = checkArr();
console.log(res);
