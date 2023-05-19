const getTheTitles = function(array) {
    titlesArray = [];
    for(let i = 0; i < array.length; i++){
        titlesArray.push(array[i]['title']);
    }
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
