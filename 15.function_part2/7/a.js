function doARr (){
    return [ { title: "Laptop", category: "Electronics", price: 1200 }, { title:
        "Coffee Mug", category: "Kitchen", price: 15 }, { title: "Notebook", category: "Stationery", price: 5 }, {
        title: "Headphones", category: "Electronics", price: 80 }, { title: "Chair", category: "Furniture", price: 150 }
        ];
}

function checkArr (arr) {
    for(let i = 0; i < arr.length; i++){
        const check = arr.every(function(el){
            if(typeof el.category === 'string' && el.price > 0){
                return true
            } else {
                return false
            }
        })
        return check;
    }
}

function doGroup () {
    const arr = doARr();
    const check = checkArr(arr)

    if(check === true){
        const group = arr.reduce(function(acc, group){
        const category = group.category;
        if(!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(group.title);
        return acc;
        }, {});
        return group
    } else {
        console.log('error');
        
    }
    
}

const result = doGroup();
console.log(result);
