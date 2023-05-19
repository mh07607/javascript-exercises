const removeFromArray = function(array, ...elements) {
    let new_array = [];
    let is_in_elements = false;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < elements.length; j++){
            if(array[i] === elements[j]){
                is_in_elements = true;
                break;
            }
        }
        if(is_in_elements === false){
            new_array.push(array[i]);
        }
        is_in_elements = false;
    }
    console.log(new_array);
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
