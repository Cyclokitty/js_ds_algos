// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// helper functions
function numberToString(number) {
    return number.toString();
    }

    function reverseString(str) {
        return str.split('').reduce((rev, char) => char + rev, '');
}

function reverseInt(n) {
    if (n === 0) return 0;

    if (n > 0) {
        return Number(reverseString(numberToString(n)));
    }
    
    if (n < 0) {
        let newNum = Math.abs(n);
        newNum = Number(reverseString(numberToString(newNum)));
        return -Math.abs(newNum);
    }
}

module.exports = reverseInt;
