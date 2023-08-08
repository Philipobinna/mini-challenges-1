/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

  let arr = [
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ];
  let transposedArray = [];
  for (let i = 0; i < originalArray[0].length; i++) {
    transposedArray.push([]);
    for (let j = 0; j < originalArray.length; j++) {
      transposedArray[i].push(originalArray[j][i]);
    }
  }
  

return transposedArray

}
console.log(transpose([9, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 7],
  [1, 3, 1, 5],
));


module.exports = transpose;
