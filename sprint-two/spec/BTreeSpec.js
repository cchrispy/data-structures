describe('BTree', function() {
  var tree;


  beforeEach(function() {
    tree = new BTree(2);
  });

  it('should have methods named "insert", "remove", and "contains" ', function() {
    expect(tree.insert).to.be.a('function');
    expect(tree.remove).to.be.a('function');
    expect(tree.contains).to.be.a('function');

  });
});