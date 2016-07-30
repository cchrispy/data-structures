var BloomFilter = function(m) {
  var bloom = {};
  bloom.bitArray = _.range(m).fill(0);
  bloom.hashArray = [];
  return _.extend(bloom, BloomFilter.prototype);
};

BloomFilter.prototype.insert = function(key) {
  var bloom = this;
  this.hashArray.forEach(function(hash) {
    bloom.bitArray[hash(key)] = 1;
  });
};
BloomFilter.prototype.addHash = function(hashFunc) {
  var usableHash = hashFunc.bind(null, this.bitArray.length);
  this.hashArray.push(usableHash);
};
BloomFilter.prototype.clear = function() {
  this.bitArray.fill(0);
  this.hashArray = [];
};
BloomFilter.prototype.query = function(key) {
  var bloom = this;
  return this.hashArray.every(function(hash) {
    return bloom.bitArray[hash(key)] === 1;
  });
};

/*
time complexity
all functions have constant time complexity O(1),
except for clear, which has linear time complexity O(n)
*/