const reverseString = function(string) {
        let arr = string.split("")
        let newarr = arr.reverse()
        let result = ""
        for (let s of newarr) {
            result += s
        }
    return result

}

// Do not edit below this line
module.exports = reverseString;
