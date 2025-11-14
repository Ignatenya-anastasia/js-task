let obj1 = {
    id: 1,
    name: 'nastya',
    prof: 'teacher'
}

let obj2 = {
    id: 2,
    name: 'kate',
    educate: 'college'
}

let obj3 = {}

for(let key in obj1){
    if(obj2.hasOwnProperty(key)){
        obj3[key] = obj1[key]
    }
}

console.log(obj3);
