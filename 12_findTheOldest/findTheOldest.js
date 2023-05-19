const findTheOldest = function(array) {
    let oldestPerson = array[0];
    let ageOfOldest = NaN;
    currentYear = new Date().getFullYear();

    if('yearOfDeath' in oldestPerson){
        ageOfOldest = oldestPerson['yearOfDeath']- oldestPerson['yearOfBirth'];
    }else{
        ageOfOldest =  currentYear - oldestPerson['yearOfBirth'];
    }

    for(let i = 1; i < array.length; i++){
        let ith_age = NaN;
        if('yearOfDeath' in array[i]){
            ith_age = array[i]['yearOfDeath']- array[i]['yearOfBirth'];
        }else{
            ith_age =  currentYear - array[i]['yearOfBirth'];
        }

        if(ith_age > ageOfOldest){
            oldestPerson = array[i];
            ageOfOldest = ith_age;
        }
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
