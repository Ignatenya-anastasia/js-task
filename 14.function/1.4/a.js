let products = [
    { name: "Яблоко", price: 5 },
    { name: "Банан", price: 9 },
    { name: "Апельсин", price: 4 },
    { name: "Хлеб", price: 1 },
    { name: "Сыр", price: 5 },
    { name: "Сахар", price: 3 }
];

function checkObj (){
    const check = products.filter(function(arr){
        if(typeof arr.name === 'string' && typeof arr.price === 'number'){
            return true;
        } else {
            return false;
        }
    })
    return check;
}
checkObj();

// const result = checkObj();

// console.log(result);

function filtArr () {
    const valuProduct = checkObj();

    const prices = valuProduct.map((item) =>  item.price);    //return

    let min = prices[0];
    let max = prices[0];

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }
        if(prices[i] > max){
            max = prices[i];
        }
    };

    return {minPr: min, maxPr: max};
};

const result = filtArr();

console.log(result);

