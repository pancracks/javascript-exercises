const removeFromArray = function(arr, ...args) {
    const newarr = arr.filter(x => !args.includes(x))
    return newarr
};

// Do not edit below this line
module.exports = removeFromArray;
