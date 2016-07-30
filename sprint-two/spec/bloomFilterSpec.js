describe('bloomFilter', function() {
  var bloomFilter;
  var hash1 = function(max, str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 1) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };
  var hash2 = function(max, str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 2) + hash + str.charCodeAt(i);
      hash = hash ^ hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };
  var hash3 = function(max, str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 3) + hash + str.charCodeAt(i);
      hash = hash | hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };
  var genString = function(len) {
    return String(Math.floor((Math.random() * Math.pow(10, len))));
  };


  beforeEach(function() {
    bloomFilter = BloomFilter(40);
  });

  it('should have methods named "insert", "addHash", "query", and "clear', function() {
    expect(bloomFilter.insert).to.be.a('function');
    expect(bloomFilter.addHash).to.be.a('function');
    expect(bloomFilter.clear).to.be.a('function');
    expect(bloomFilter.query).to.be.a('function');
  });
  it('should insert keys to multiple locations', function() {
    bloomFilter.addHash(hash1);
    bloomFilter.addHash(hash2);
    bloomFilter.addHash(hash3);
    bloomFilter.insert('test');
    expect(bloomFilter.query('test')).to.equal(true);
    expect(bloomFilter.query('blah')).to.equal(false);
  });
  it('should have false positives', function() {
    var counter = 0;
    bloomFilter.addHash(hash1);
    bloomFilter.addHash(hash2);
    bloomFilter.addHash(hash3);
    bloomFilter.insert('testingStuff');
    bloomFilter.insert('testerOfBloom');
    bloomFilter.insert('blahblah');
    bloomFilter.insert('546');
    for (var i = 0; i < 10000; i++) {
      if (bloomFilter.query(genString(3))) {
        counter++;
      }
    }
    console.log(counter / 10000);
    expect(counter > 0).to.equal(true);
  });
});
