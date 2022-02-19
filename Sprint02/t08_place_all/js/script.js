/**
 * 
 * @param {Array} date 
 */

function sortEvenOdd(date){
    let cmp = (a, b) => {
        return a % 2 - b % 2 || a - b;
    }
    date.sort(cmp);
}
