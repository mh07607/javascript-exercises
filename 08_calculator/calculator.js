const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	summation = 0;
  for(i=0; i<numbers.length; i++){
    summation = summation + numbers[i];
  }
  return summation;
};

const multiply = function(numbers) {
  result = 1;
  for(i=0; i<numbers.length; i++){
    result = result*numbers[i]
  }
  return result;
};

const power = function(number, exponent) {
  return number ** exponent;
};

const factorial = function(number) {
  result = 1;
	for(i=1; i<number+1; i++){
    result = result*i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
