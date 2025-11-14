let obj = {
    id: 1,
    name: 'Nastya',
    prof: 'teacher',
    place: 'kindergarden'
}

let word = prompt();

const arr = Object.keys(obj);

const res = arr.some(function(el){
    if(el == word) return true;
    else return false;
});

console.log(res);
