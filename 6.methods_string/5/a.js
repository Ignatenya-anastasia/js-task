const string = prompt();

if(isNaN(string)){
    const str = string.trim();
    console.log(str[0].toUpperCase() + str.slice(1));
} else{
console.log('Oшибка ввода')
}