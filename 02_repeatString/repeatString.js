function repeatString(string, nums) {
    let result = "";
    if (nums < 0) {
        return "ERROR"
    }

    for (let i =0; i < nums; i++) {
        result += string
    }
    return result 
}

// Do not edit below this line
module.exports = repeatString;
