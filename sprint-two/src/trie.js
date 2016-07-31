var Trie = function(letter) {
  this.children = [];
  this.value = letter;
  this.endChar = false;
  this.useCounter = 0;
};

Trie.prototype.insert = function(word) {
  word = word.toLowerCase();
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
Trie.prototype.autofill = function(partialWord) {
  var retval = '';
  var childrenIndex = (this.children.findIndex(function(tree) {
    return tree.value === partialWord[0];
  }));

  //Case where we no longer have any word to add
  if (partialWord.length === 0) {
    //In the case where there's no more word to add
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