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

   // prevNode:  { value: 'mozilla.org', next: { value: 'eff.org', next: { value: 'icann.org', next: null } } }
   // toBeRemoved: { value: 'eff.org', next: { value: 'icann.org', next: null } }
   // nextNode: { value: 'icann.org', next: null }
   var prevNode = get(number-1);
   var toBeRemoved = get(number)
   var nextNode = get(number+1);

   if(number === 0) {
    head = nextNode
   }



   if(toBeRemoved.next === null) {
    tail = prevNode;
    prevNode.next = null
    console.log('tail: ', tail);
   } else if(!toBeRemoved){
      return false;
    } else if(!nextNode){
      prevNode.next = null
      } else {
        prevNode.next = nextNode;
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

var linkedList = linkedListGenerator()
linkedList.add('Ready Player One');
linkedList.add('1982');
linkedList.add('Neuromancer');
linkedList.add('Snow Crash');
console.log("get1",linkedList.get(0))
console.log("get2",linkedList.get(2))
console.log(linkedList.remove(2))
console.log("get3", linkedList.get(0))
console.log(linkedList.remove(2))
console.log("get4", linkedList.get(2))
console.log("get5", linkedList.remove())


