let arr = [
        [5, 1, 7],
        [3, 9],
        [0, 4, 8]
        ];
let max = 0;

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr[i].length; j++){
            if(max > arr[i][j]){
                continue;
            }
            max = arr[i][j]
            
        }
    }

    console.log(max);
    