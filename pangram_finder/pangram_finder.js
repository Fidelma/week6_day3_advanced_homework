const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
}


// PangramFinder.prototype.isPangram = function () {
//   var success = this.alphabet.every((val) => {
//     return this.phrase.indexOf(val) !== -1;
// });
//   return success;
// }

PangramFinder.prototype.isPangram = function () {
  var success = this.alphabet.every((val) => {
    return this.phrase.includes(val);
});
  return success;
}

module.exports = PangramFinder;
