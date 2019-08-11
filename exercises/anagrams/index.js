// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// OMG AND EVEN EASIER WAY!

function stripNonAlphanumeric(str) {
    return str.match(/\w/g).join('').toLowerCase().split('').sort().join('') ;
}

function anagrams(stringA, stringB) {
    return stripNonAlphanumeric(stringA) === stripNonAlphanumeric(stringB) ? true : false;
}

// helper function
// function mapChars(str) {
//     let chars = {};
//     str = str.split('');

//     for (let char of str) {
//         typeof chars[char] === 'undefined' ? chars[char] = 1 : chars[char]++;
//     }
//     return chars;
// }

// function stripNonAlphanumeric(str) {
//     return str.match(/\w/g).join('').toLowerCase();
// }

// function sortObjectKeys(obj) {
//     return Object.keys(obj)
//         .sort()
//         .reduce((acc, key) => {
//             acc[key] = obj[key];
//             return acc;
//         }, {})
// }

// function anagrams(stringA, stringB) {
//     let strA = stripNonAlphanumeric(stringA);
//     let strB = stripNonAlphanumeric(stringB);

//     strA = mapChars(strA);
//     strB = mapChars(strB);

//     strA = sortObjectKeys(strA);
//     strB = sortObjectKeys(strB);

//     return (JSON.stringify(strA) === JSON.stringify(strB)) ?  true :  false;
// }

module.exports = anagrams;
