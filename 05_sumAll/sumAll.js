const sumAll = function(num1, num2) {

    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }
    let start = Math.min(num1,num2);
    let end = Math.max(num1,num2);
    let sum = 0;

    for (i = start; i <= end; i++){
         sum += i
    }
    return sum


};

// Do not edit below this line
module.exports = sumAll;
