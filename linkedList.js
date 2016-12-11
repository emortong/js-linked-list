/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;
  var tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    var newNode = {
        value: value,
        next: null
      }

    if(head === null && tail === null) {
      head = newNode;
      tail = newNode;

    } else {
        tail.next = newNode // make current tail's next to equal Value; tail is now Value
        tail = newNode
      }

    return newNode;
  }

  function get(number) {
    var currentNode = head;
    var nodeNumber = 0

    while(currentNode !== null) {
      if(nodeNumber !== number) {
        nodeNumber++
        currentNode = currentNode.next;
      } else if(currentNode.next === null && nodeNumber < number) {
        return false
        } else {
          return currentNode
        }
    }

    return false
  }

  function remove(number) {
   // find the node and keep track of the prev node, when found update prev node's
   // next to point to the next node referenced by node to be deleted
   // delete found node
   var prevNode = get(number-1);
   var toBeRemoved = get(number)
   var nextNode = get(number+1);
   console.log('prevNode: ', prevNode);
   console.log('toBeRemoved: ', toBeRemoved);

   if(toBeRemoved.next === null) {
    tail = prevNode;
   } else {
      prevNode.next = nextNode.next;
    }
  }





  function insert(value, number) {}


  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  }
}