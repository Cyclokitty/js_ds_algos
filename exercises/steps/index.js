// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// my solution
// function steps(n) {
//     let stepper = 1;

//     if (n < 0) return '';
    
//     while (stepper <= n) {    
//         if (stepper === n) {
//             console.log('#'.repeat(stepper));
//         } else {
//             console.log('#'.repeat(stepper) + ' '.repeat(n - stepper));
//         }
//         stepper++;
//     }  
// }

function steps(n) {
    // from 0 to n(iterate thru rows)
    for (let i = 0; i < n; i++) {
      // create an empty string, 'stair'
        let stair = '';
      // from 0 to n (iterate thru columns)
        for (let j = 0; j < n; j++) {
        // if the current column is equal to or lessthan the current row:
        if (j <= i) {
          // add a '#' to the stair
            stair += '#';
        } // else 
            else {
            // ad a space to stair
            stair += ' ';
        }
    }
      // console.log stair
        console.log(stair);  
    }    
}

module.exports = steps;
