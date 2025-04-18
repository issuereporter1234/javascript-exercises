const add = function(x, y) {
  return x + y
	
};

const subtract = function(x, y) {
  return x - y

	
};

const sum = function(array) {
  let zbir = 0
  for (let i = 0; i < array.length; i++ ) {
    zbir += array[i];
    
  }
	return zbir
};

const multiply = function(array) {
  let quotient = 1
  for (let i = 0; i < array.length; i++){
    quotient *= array[i];
  }
  return quotient
};

const power = function(x, y) {
  return x ** y
	
};

const factorial = function(x) {
  let fac = 1
  if (x == 0 ){x = 1}
  else{
    
    for (let counter = 1; counter <= x; ++counter)
      fac *= counter
    }
  
	return fac
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
