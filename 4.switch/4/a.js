const num = prompt();

// if(!isNaN(num) > 0){
//     console.log('Число', num,'положительное');
// } else{
//     console.log('Число', num,'отрицательное');
// }

!isNaN(num) > 0 ? console.log('Число', num,'положительное') : console.log('Число', num,'отрицательное');