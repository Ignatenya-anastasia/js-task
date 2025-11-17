function chekWord (word){
    if(word == word.split('').reverse().join('')){
        return true
    } else {
        return false
    }
}

const result = chekWord(prompt())
chekWord()