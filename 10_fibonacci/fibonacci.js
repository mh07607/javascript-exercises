const fibonacci = function(number) {
    if(number < 0){
        return "OOPS";
    }
    var f_lst = [1, 1];
    for(let i = 2; i<number; i++){
        f_lst.push(f_lst[f_lst.length-1]+f_lst[f_lst.length-2]);
    }   

    console.log(f_lst);
    return f_lst[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
