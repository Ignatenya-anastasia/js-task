function doArr(arr) {
    for (let i = 0; i < 5; i++) {
        arr.push(prompt());
    }
}

let array = [];
const arr1 = doArr(array)

function doNum(){
    const resCheck = array.every(function(el){
        if(!isNaN(el)){
            return true;
        }
    })

    if(resCheck === true){
        const num = array.filter(function(el){
            if(el % 2 == 0){
                return true
            } else {
                return false;
            }
        })

        console.log(num);
        
    }
}

doNum()