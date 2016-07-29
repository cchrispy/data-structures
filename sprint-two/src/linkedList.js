var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
    }
    if (this.tail !== null) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (this.head !== null) {
      var result = this.head.value;
      this.head = this.head.next;
      return result;
    }
  };

  list.contains = function(target) {
    return this.find(this.head, target);
  };
  
  list.find = function(node, target) {
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      return this.find(node.next, target);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail(): O(1)
 removeHead(): O(1)
 contains(): O(n)
 find(): O(n)
 */


// {head: somenode,
// tail: somenode}

// {head:
//   next: {value: 
//     next :{value: value,
//       next: {
//         value: value,
//         next: null
//       }
//     }
//   },
//  tail: lastNode
// }
