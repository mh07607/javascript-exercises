const leapYears = function(year) {
    let isLeapYear = false;
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                isLeapYear = true; 
            }
        }
        else{
            isLeapYear = true;
        }
    }

    return isLeapYear;

};

// Do not edit below this line
module.exports = leapYears;
