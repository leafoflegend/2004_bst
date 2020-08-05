const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// How do I find out if a specific element is in this list?

// .find()
// .filter()
// .includes()
// for () {}
// .indexOf

// They go from index 0 to index length - 1 looking for the thing they need.

// Fastest:
// If that thing is the first thing in the list.

// Slowest:
// If that thing is the last thing in the last.

// Tree
/*
        A
    B       C
  D   E   F   G
*/

// HTML is a giant TREE!!!

// Trees can be made of a variety of relationships, some are as simple as "descendant" and others may be more complex like a mathematical relationship.

// Binary Search Trees are trees that have really one rule set but we can say two rules:

// BST Rules
// 1. All nodes can have no more than 2 children.
// 2. All relationships (child parent) must be able to be evaluated as less than or greater than. Things that are greater go to the right, things that are less go to the left.

const a = {};
const b = [];
const c = Symbol('Pancakes');

/*
                     50
           25                 75
                            62
                              65
*/

const generateAHugeList = (size, ceiling) => {
  return new Array(size).fill('').map(e => {
    return Math.ceil(Math.random() * ceiling);
  });
}

class BinarySearchTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    const nodeVal = val instanceof BinarySearchTree
      ? val
      : new BinarySearchTree(val);

    if (nodeVal.val < this.val) {
      if (this.left) {
        this.left.insert(nodeVal);
      } else {
        this.left = nodeVal;
      }
    } else {
      if (this.right) {
        this.right.insert(nodeVal);
      } else {
        this.right = nodeVal;
      }
    }
  }

  search(cb) {
    const result = cb(this.val);

    if (!result) return this;
    else {
      if (result > 0) {
        if (this.right) return this.right.search(cb);
      } else if (this.left) return this.left.search(cb);

      return null;
    }
  }

}

/*
                  1
                    2
                      3
                        4
                          5
                            6
                              7
                                8
                                  9
                                    10

*/

const arrToBST = (arr) => {
  let treeRoot = null;

  for (let i = 0; i < arr.length; ++i) {
    const curElem = arr[i];

    if (!treeRoot) {
      treeRoot = new BinarySearchTree(curElem);
    } else {
      treeRoot.insert(curElem);
    }
  }

  return treeRoot;
};

const hugeArr = generateAHugeList(10000000, 679452);

const searchTerm = 66666;

console.log('Search Term: ', searchTerm);

console.time('Create BST');
const tree = arrToBST(hugeArr);
console.timeEnd('Create BST');

console.time('BST');
const res = tree.search((val) => {
  if (val === searchTerm) return 0;
  else if (val < searchTerm) return 1;
  else return -1;
});

console.log('BST Search result: ', res);
console.timeEnd('BST');

console.time('ARR');
const arrRes = hugeArr.some((e) => {
  return e === searchTerm;
});
console.timeEnd('ARR');

console.log('ARR Search result: ', arrRes);


