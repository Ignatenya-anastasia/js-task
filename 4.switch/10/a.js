let number = prompt();

number /= 100;

!isNaN(number) ? console.log(Math.floor(number)) : console.log("Вы ввели не число");