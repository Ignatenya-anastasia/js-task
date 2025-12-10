let email = 'ignnast@mail.com';

function checkMail(){
    try{
        if(!email.includes('@')) throw new Error('отсуствует @');
        else console.log(true);
        
    } catch(error){
        console.log(error);
        
    }
}
checkMail();