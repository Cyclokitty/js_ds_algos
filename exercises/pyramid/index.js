// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let spaces = n - 1;
    let blocks = 1;
  
    while (spaces >= 0) {
        let level = '';
        level = ' '.repeat(spaces) + '#'.repeat(blocks) + ' '.repeat(spaces);
        console.log(level);
        spaces--;
        blocks += 2;
        }  
  }

module.exports = pyramid;
