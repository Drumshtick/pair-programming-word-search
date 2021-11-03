const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(word.split("").reverse().join(""))) return true;
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for(l  of verticalJoin) {
      if (l.includes(word) || l.includes(word.split("").reverse().join(""))) return true;
    }
    return false;
}
const transpose = function(matrix) {
  // Put your solution here
  let newMat = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMat.push([]);
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++){
      newMat[col][row] = matrix[row][col]
    }
  }
  return newMat;
};
module.exports = wordSearch