function formatDate(separator){
    return function(day){
        return function(month){
            return function(year){
                console.log(`${day}${separator}${month}${separator}${year}`);
                
            }
        }
    }
}

formatDate('/')('26')('11')('2025')