const a = prompt();

if(isNaN(a)){
    console.log(a.trim().toLowerCase(), 'Длина:', a.length)
} else{
    console.log('Ошибка ввода');
    
}