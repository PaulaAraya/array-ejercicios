/* 
1) computeAverageLengthOfWords
Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.
*/

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length)/2
}

module.exports = computeAverageLengthOfWords;


// 2) getNthElement

function getNthElement(array, n) {
  return array[n];
}

module.exports = getNthElement;


//3) convertDoubleSpaceToSingle


function convertDoubleSpaceToSingle(str) {
  str = str.split("  ");
  return str.join(" ");
}
module.exports = convertDoubleSpaceToSingle;

// 3) areValidCredentials

function areValidCredentials(name, password) {
  if (name.length >= 3 && password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

module.exports = areValidCredentials;
