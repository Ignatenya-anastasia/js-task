function greetUser(name){
    return function (){
        console.log(`Hello, ${name}`);
        
    }
}

const res = greetUser('Nastya');
res();
res();
res();