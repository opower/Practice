/**
 * 
 * @param {*} arr 
 * return true if all even indices have even values and false if not
 */
const specialArray = (arr) => {

  let bool = true;
  for(const i in arr){
    if(i % 2 === 0 && arr[i] % 2 !== 0){
      bool = false;
    } else if (i % 2 !== 0 && arr[i] % 2 === 0){
      bool = false;
    }
  }

  return bool;
}
// console.log(specialArray([2, 7, 4, 9, 6, 1, 6, 3]))
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// console.log(specialArray([2, 7, 9, 1, 6, 1, 6, 3]))
// // Index 2 has an odd number 9.

console.log(specialArray([2, 7, 8, 8, 6, 1, 6, 3]))