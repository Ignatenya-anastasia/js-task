function sayHello() {
    console.log(`Привет, ${this.name}.`);
}


const user = {
    name: 'Мария'
};


sayHello.call(user);