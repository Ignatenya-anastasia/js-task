const person = {
    name: 'Nastya',
    greet () {
        console.log(`Привет, я ${this.name}`);
        
    }
};

person.greet();