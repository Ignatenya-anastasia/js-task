const person = {
    firstName: 'Nistya',
    lastName: 'Ign',
    
    fullName: function (){
        console.log(this.firstName, this.lastName);
        
    }
}

person.fullName();