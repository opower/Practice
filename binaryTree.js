/**
 * Find the node type of binary tree ordered by value of node
 * params: n = value of a node, p = parent of n
 * return: root, leaf, inner, not exist
 */
const nodeType = (node, parent, num) => {

  let index = node.indexOf(num)
  let children = parent.indexOf(num)

  if(children !== - 1 && parent[index] !== -1){
    return 'Inner'
  } else if(parent[index] === -1){
    return 'Root'
  } else if(children === -1 && index !== -1){
    return 'Leaf'
  } else {
    return 'Not Exist'
  }
}

console.log(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1],5))
console.log(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 6))
console.log(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 2))
console.log(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 10))