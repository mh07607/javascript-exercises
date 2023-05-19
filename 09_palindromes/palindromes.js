const palindromes = function (string) {
    let newstring = "";
    string = string.toLowerCase();
    for(let i=0; i<string.length; i++){
        if(string[i] == ' ' || string[i] == '.' || string[i] == ',' || string[i] == '!'){
            continue;
        }
        newstring = newstring + string[i];
    }
    reverseString = newstring.split("").reverse().join("");

    if(newstring == reverseString){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
