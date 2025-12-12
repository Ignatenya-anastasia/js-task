const logger = {
    logFullInfo(city, age){
        console.log(`${this.name} из ${city}, ${age} лет`);
        
    }
};

const user = {
    name: 'Nastya'
};

const info = ['Gomel', 24];

logger.logFullInfo.apply(user, info);