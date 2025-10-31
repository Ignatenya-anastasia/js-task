let array = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4];
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;

for(let i = 0; i < array.length; i++){
    switch (array[i]){
        case 1:
            a += 1;
            break;
        case 2:
            b += 1;
            break;
        case 3:
            c += 1;
            break;
        case 4:
            d += 1;
            break;
        case 5:
            e += 1;
            break;
    }
}

console.log(`${a} ${b} ${c} ${d} ${d} `);
