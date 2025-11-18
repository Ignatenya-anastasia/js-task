const  checkWord = (a, b) => a.split('').sort().join('') === b.split('').sort().join('') ? console.log(true) : console.log(false);

checkWord(prompt(), prompt())