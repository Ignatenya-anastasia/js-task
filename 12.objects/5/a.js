let users = [
        { id: 1, name: "Anna" },
        { id: 2, name: "Maks" }
        ];

        let orders = [
        { userId: 1, item: "Book" },
        { userId: 2, item: "Phone" },
        { userId: 1, item: "Pen" }
        ];

let userName = users.reduce(function(arr, user){
    arr[user.id] = user.name;
    return arr;
}, {})

// console.log(userName);


// let orderUser = orders.reduce(function(arr, order){
//     let nameUser = userName[order.userId];

//     arr[nameUser].push(order.item);

//     return arr
// }, {})

// console.log(orderUser);
