const sumAll = function(number1 , number2) {
    let sum = 0
    if ((number1 < 0) || (number2 < 0) || !Number.isInteger(number1) || !Number.isInteger(number2) || isNaN(number1) || isNaN(number2)){
        return "ERROR"
    }
    else if (number1 < number2){
    
    for(let counter = number1; number2 >= counter; ++counter){
        sum += counter
    }
}
    else {
        for (counter = number2; number1 >= counter; ++counter){
            sum += counter
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
