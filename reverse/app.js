// metodo reverse en array

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
const invested = alphabet.reverse ;
console.log(invested) 

// array invertido es un nuevo array
const alphabet2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
    alphabet2.sort( function (a,b) {
      return b.localeCompare(a);
  });
