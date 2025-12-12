const user = {
    role: prompt(),

    checkAccess: function(name){
        if(user.role == 'admin'){
            console.log(`Сообщение для admin  ${name} : полный доступ`);
            
        } else{
            console.log(`Сообщение для user  ${name} : полный доступ`);
        }
    }
}

user.checkAccess(prompt())