let products = [
        { name: "Apple", category: "fruit" },
        { name: "Banana", category: "fruit" },
        { name: "Cucumber", category: "vegetable" },
        { name: "Tomato", category: "vegetable" },
        { name: "Bread", category: "bakery" }
        ];

const res = products.reduce(function(arr, product){
    arr[product.category] = (arr[product.category] || 0) + 1;

    return arr;
}, {})

console.log(res);
