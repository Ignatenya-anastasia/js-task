const date = prompt();

console.log(date.replaceAll('-', '.').split('').reverse().join(''));