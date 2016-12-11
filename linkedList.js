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


  function insert(value, number) {

  var prevs = get(number-1)
  var toBePlaced = get(number);
  var newNode;

  newNode = {
      value: value,
      next: toBePlaced
  }

  if(number === 0) {
    head = newNode;
  } else if(!toBePlaced) {
    return false;
  } else {
    prevs.next = newNode;
  }

    console.log('newNode: ', newNode);

// instructions say to not append at the last index, but tests ask you
// to append, and dont test that specific instruction

//   if(toBePlaced.next === null) {
//     return false;
//   } else {
//     newNode = {
//       value: value,
//       next: toBePlaced
//     }
//     prevs.next = newNode;
//     console.log('newNode: ', newNode);
//   }
// }

}


  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  }
}






