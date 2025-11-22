let arr = ["cat", "lion", "dog", "elephant", "bat", "fox", "wolf", "bee"];

function findWord (){
    const res = arr.filter(function(el){
        if(el.length == 3 || el.length == 4){
            return true;
        } else {
            return false;
        }
    })
    console.log(res);
    
}
findWord();