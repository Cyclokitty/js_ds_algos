// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// more condensed solution
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// iterative
// function vowels(str) {
//     let counter = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             counter++;
//         }
//     }
//     return counter;
// }

// my solution
// function vowels(str) {
//     const regexVowels = /[aeiou]/gi;
//     let counter = 0;
//     for (let letter of str) {
//         if (letter.match(regexVowels)) {
//             counter++;
//             console.log(letter)
//         }
//     }
// return counter;
// }

module.exports = vowels;
