/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

let number = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

let lastValue = number[roman[roman.length - 1]];
let result = lastValue;

for(let i = roman.length-1; i >=0; i--){
  
  let nextValue =  number[roman[i - 1]];
  let currentValue =  number[roman[i]];
    
  if(nextValue >= currentValue){
    result += nextValue;
  }else if(nextValue < currentValue){
    result -= nextValue;
  }
}
return result;

}
console.log(romanToDecimal('MMCDXLVIII'))

module.exports = romanToDecimal;

