const palindromes = function (str) {
    str = str.toLowerCase()
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    str = str.replace(/\s/g, '')
    
    if (str.split("").reverse().join("") == str){
        return true
    }
    else { return false}
};

// Do not edit below this line
module.exports = palindromes;
