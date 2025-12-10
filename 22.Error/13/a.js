function doTrian(a, b, c){
    try{
        if((a + b) < c || (a + c) < b || (b + c) < a) throw new Error ('невозможно построить треугольник');

        else console.log(true);
        
        
    } catch(error){
        console.log(error);
        
    }
}

doTrian(2, 2, 10);