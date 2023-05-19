const sumAll = function(start, end) {
    if(start < 0 || typeof(start) != "number" || end < 0 || typeof(end) != "number"){
        return "ERROR";
    }

    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    
    let sum = 0;
    for(i = start; i < end+1; i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
