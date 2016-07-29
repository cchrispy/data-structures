describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.head.value).to.equal(4);
  });

  it('should designate a new head when new nodes are added', function() {
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.head.value).to.equal(3);
    doublyLinkedList.addToHead(7);
    expect(doublyLinkedList.head.value).to.equal(7);
    expect(doublyLinkedList.tail.value).to.equal(3);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(8);
    expect(doublyLinkedList.head.value).to.equal(8);
    doublyLinkedList.addToHead(13);
    expect(doublyLinkedList.head.value).to.equal(13);
    expect(doublyLinkedList.tail.value).to.equal(8);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
    expect(doublyLinkedList.tail).to.equal(null);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
  });


  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToTail(17);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(17)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToHead(17);
    doublyLinkedList.removeHead();
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
});
