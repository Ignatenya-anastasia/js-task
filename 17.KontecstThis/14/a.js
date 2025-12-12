function introduce(age, city){
    console.log(`${this.name} - ${age} лет, живет в ${city}`);
    
}

const person = {
    name: 'Nastya'
};

const info = [24, 'Minsk'];

introduce.apply(person, info)