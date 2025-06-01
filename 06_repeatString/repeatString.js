const repeatString = function(startString, num) {
    if (num < 0){
        return "ERROR"
    }

    else{
    for(endString= ""; num > 0; --num){
        endString = endString + startString
    }
    }
    
    return endString
};
repeatString('hey', )
// Do not edit below this line
module.exports = repeatString;
