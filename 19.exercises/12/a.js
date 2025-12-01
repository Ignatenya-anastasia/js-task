const obj = {
    person(age) {
    console.log((age += this.name));
},
};
const str = {
    name: "Nastya",
};
obj.person.call(str, 24);