// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// recursive
// helper functions:
function firstLetter(str) {
    return str.slice(0, 1);
}

function lastLetter(str) {
    return str.slice(-1);
}

function middleWord(str) {
    return str.slice(1, -1);
}

function palindrome(str) {
    if (str.length < 2) return true;

    if (firstLetter(str) === lastLetter(str)) return palindrome(middleWord(str));

    return false;
}

// using the .reduce method from reversestring
// function palindrome(str) {
//     // reverse word
//     let revWord = str.split('').reduce((rev, char) => char + rev, '');
//     return str === revWord ? true : false;

//     // if reversed word equals str return true, else return false
// }

palindrome('madam');
palindrome('wex');

module.exports = palindrome;
