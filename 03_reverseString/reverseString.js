const reverseString = function(string) {
    resultant_string = '';
    for(let i = string.length-1; i >= 0; i--){
        resultant_string = resultant_string + string[i];
    }
    return resultant_string;

    
};

// Do not edit below this line
module.exports = reverseString;
