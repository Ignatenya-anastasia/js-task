function checkArr (){
    let arr = [10, 2, 5, 3, 7];
    const res = Math.max(...arr) - Math.min(...arr);
    console.log(res);
}

checkArr()