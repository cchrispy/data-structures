var DoublyLinkedList = function(){
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var newNode = Node(value);
  if (this.head === null) {
    this.head = newNode;
  }
  if (this.tail === null) {
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var newNode = Node(value);
  if (this.tail === null) {
    this.tail = newNode;
  }
  if (this.head === null) {
    this.head = newNode;
  } else {
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
};
DoublyLinkedList.prototype.removeHead = function() {
  if (this.head !== null) {
    var result = this.head.value;
    if (this.head.next) {
      this.head.next.previous = null;
    }
    this.head = this.head.next;
    return result;
  }
};
DoublyLinkedList.prototype.removeTail = function() {
  if (this.tail !== null) {
    var result = this.tail.value;
    if (this.tail.previous) {
      this.tail.previous.next = null;
    }
    this.tail = this.tail.previous;
    return result;
  }
};

DoublyLinkedList.prototype.contains = function(value) {
  var searchNode = this.tail;
  while (searchNode.previous !== null && searchNode.value !== value) {
    searchNode = searchNode.previous;
  }
  return searchNode.value === value ? true : false;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};