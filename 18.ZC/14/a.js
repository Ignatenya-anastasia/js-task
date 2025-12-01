function secretMessage(msg){
    return function(){
        console.log(msg);
        
    }
}

secretMessage('hi')();