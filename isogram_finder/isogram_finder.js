const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

// IsogramFinder.prototype.isIsogram = function () {
//   let lettersSoFar = [];
//   return this.word.forEach((letter) => {
//       if (!lettersSoFar.includes(letter)){
//       lettersSoFar.push(letter);
//     }
//    let success = this.word.every((letter) => {
//      return this.phrase.indexOf(letter) !== -1;
//    });
//   });
//   return success;
// }

IsogramFinder.prototype.isIsogram = function () {
 return this.word.every((letter, index) => {
   return this.word.indexOf(letter) == index;
 })
}

module.exports = IsogramFinder;
