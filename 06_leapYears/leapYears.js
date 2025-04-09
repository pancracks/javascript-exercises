const leapYears = function(leap) {
    let divByFour = leap % 4 === 0;
    let century = leap % 100 === 0;
    let divByFourCen = leap % 400 === 0;

    if (divByFour &&
        (!century || divByFourCen)
    ){
        return true
    }
    else {
        return false
    }

};

// Do not edit below this line
module.exports = leapYears;
