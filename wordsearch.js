// Pair programming with: Danny

const wordSearch = (letters, word) => {
  if (word.length === 1) return false;
  if (word === "") return false;

  const wordUpperCase = word.toUpperCase();
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));

  for (let l of horizontalJoin) {
    if (l.includes(wordUpperCase)) return true;
  }

  for (let l of verticalJoin) {
    if (l.includes(wordUpperCase)) return true;
  }

  return false;
};

const transpose = function (matrix) {
  const finalArr = [];

  for (let j = 0; j < matrix[0].length; j++) {
    let val = [];
    for (let a = 0; a < matrix.length; a++) {
      val.push(matrix[a][j]);
    }
    finalArr.push(val);
  }
  return finalArr;
};

module.exports = wordSearch;
