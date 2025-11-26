const formatter = {
    format(){
        return `${this.lastName} ${this.firstName}`
    }
};

const person1 = { firstName: "Никита", lastName: "Орлов" };
const person2 = { firstName: "Лена", lastName: "Кравцова" };


console.log(formatter.format.call(person1));
console.log(formatter.format.call(person2));

