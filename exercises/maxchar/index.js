// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};

    str = str.split('');

    for (let char of str) {
        typeof chars[char] === 'undefined' ? chars[char] = 1 : chars[char]++;
    }

    let max = 0;
    let maxChar = '';
    for (let key in chars) {
        if (chars[key] > max) {
            max = chars[key];
            maxChar = key;
        }
    }
    return maxChar;

}

module.exports = maxChar;
