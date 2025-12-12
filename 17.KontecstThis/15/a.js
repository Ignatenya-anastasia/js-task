function sayHi (){
console.log(`Hello, ${this.name}`);

}

const user = {
    name: 'Nastya'
};

const sayHiFromUser = sayHi.bind(user);

sayHiFromUser();