const utils = {
    showName(){
        console.log(`Hello, ${this.name}`);
        
    }
};

const person = {
    name: 'Nastya'
};

utils.showName.call(person);