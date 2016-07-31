var Trie = function(letter) {
  this.children = [];
  this.value = letter;
  this.endChar = false;
  this.useCounter = 0;
};

Trie.prototype.insert = function(word) {
  var newTrie = new Trie(word[0]);
  var childrenIndex = (this.children.findIndex(function(tree) {
    return tree.value === word[0];
  }));
  if (childrenIndex > -1) {
    this.children[childrenIndex].useCounter ++;
    this.children[childrenIndex].insert(word.slice(1));
  }
  if (word.length > 1) {
    newTrie.insert(word.slice(1));
  } else {
    newTrie.endChar = true;
  }
  if (childrenIndex < 0) {
    this.children.push(newTrie);
  }
};
Trie.prototype.predictToDocument =function(document){
  var wordsToPredict = document.split(" ");
  wordsToPredict.forEach(function(word){
    this.insert(word.replace(/\W/g, '').toLowerCase());
  }.bind(this));
}
Trie.prototype.autofill = function(partialWord) {
  var retval = '';
  var childrenIndex = (this.children.findIndex(function(tree) {
    if(partialWord[0] !== undefined){
      return tree.value === partialWord[0].toUpperCase() || tree.value === partialWord[0].toLowerCase();
    }
  }));

  //Case where we no longer have any word to add
  //We're going to start autofilling
  if (partialWord.length === 0) {
    var nextLetter = this.children.reduce(function(highest, next) {
      if (highest.useCounter < next.useCounter) {
        return next;
      }
      return highest;
    });
    retval += nextLetter.value;
    if (nextLetter.endChar) {
      return retval;
    }
    retval += nextLetter.autofill(partialWord);

  }

  if (childrenIndex > -1) {
    //Case where there is a child node that matches the next character;
    retval += partialWord[0];
    retval += this.children[childrenIndex].autofill(partialWord.slice(1));
  }

  if (childrenIndex < 0) {
    //Case where the next letter doesn't already exist in the tree
    retval += partialWord;
  }
  return retval;
};
Trie.prototype.clear = function(){
  this.children = [];
  this.value = null;
  this.endChar = false;
  this.useCounter = 0;
}