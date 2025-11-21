

function doArr (){
    return [ { title: "Item 1", year: 2020 }, { title: "Item 2", year: 2021
        }, { title: "Item 3", year: 2022 } ];
}

function checkArr(arr){
    const check = arr.every(function(el){
        if(el.year > 1900){
            return true
        } else{
            return false;
        }
    })
    return check;
}


function main () {
    const arr = doArr();
    const res = checkArr(arr);
    
    if(res === true){
        let newArr = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i].year >= 2020){
                newArr.push(arr[i])
            }
        }
        return newArr;
    }
}

const result = main()

console.log(result);


