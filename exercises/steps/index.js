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
function steps(n) {
    let stepper = 1;

    if (n < 0) return '';
    
    while (stepper <= n) {    
        if (stepper === n) {
            console.log('#'.repeat(stepper));
        } else {
            console.log('#'.repeat(stepper) + ' '.repeat(n - stepper));
        }
        stepper++;
    }  
}

module.exports = steps;
