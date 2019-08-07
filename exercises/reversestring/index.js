// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// using the .reduce()
function reverse(str) {                                                                            
    return str.split('').reduce((reversed, character) => character + reversed
    , '');
}

// function reverse(str) {
//     let newStr = '';
//     for ( let character of str) {
//         newStr = character + newStr;
//     }
//     return newStr;
// }

// this one is mine:
// function reverse(str) {
//     let newStr = '';
//     for ( let i = str.length - 1; i >= 0; i-- ) {
//         newStr += str[i];
//     }
//     return newStr;
// }

// using the built in functions
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

console.log(reverse('liver'));
console.log(reverse('muhaha'));

module.exports = reverse;
