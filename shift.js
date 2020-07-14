const shift = (arr1, arr2, n) => {

  for(let i = 0; i < n; i ++){
    let num = arr2.shift();
    arr2.push(num);
  }

  return equal(arr1, arr2)
}

const equal = (arr1, arr2) => {
  
  for(const i in arr1){
    if(arr1[i] !== arr2[i]) return false;
  }
  return true
}

console.log(shift([1, 2, 3, 4], [3, 4, 1, 2], 2))
console.log(shift([0, 1, 2, 3, 4, 5], [3, 4, 5, 2, 1, 0], 3))