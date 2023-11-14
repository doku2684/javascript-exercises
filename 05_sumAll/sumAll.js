const sumAll = function(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
        if (x <= 0 || y <= 0) return "ERROR"
        if (x > y) {
            return (x*(x+1)/2 - y*(y-1)/2)
        } else {
            return (y*(y+1)/2 - x*(x-1)/2)
        }
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
