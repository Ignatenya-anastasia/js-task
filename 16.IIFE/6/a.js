(function(obj){
    if(obj.age > 17){
        console.log(`${obj.name} 'совершеннолетний'`);
        
    } else {
        console.log(`${obj.name} 'несовершеннолетний'`);
        
    }
    

}) ({name: 'lena', age: 16});