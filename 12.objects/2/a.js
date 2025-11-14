let students = [
        { name: "Anna", age: 20 },
        { name: "Maks", age: 21 },
        { name: "Olya", age: 20 },
        { name: "Dima", age: 22 }
        ];

let group = students.reduce(function(arr, student){
    if(!arr[student.age]){
        arr[student.age] = [];
    }

    arr[student.age].push(student.name);

    return arr
}, {})

console.log(group);



