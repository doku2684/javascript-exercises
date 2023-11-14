const removeFromArray = function(array, ...elements) {
    for (e of elements) {
        array = array.filter(item => item !== e)
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
