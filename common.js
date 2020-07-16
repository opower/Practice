const common = (ar1, ar2) => {

  let obj = {};
  let result = [];

  for(const i of ar1){
    obj[i] = i;
  }

  for(const i of ar2){
    if(obj[i]){
      result.push(i)
    }
  }

  return result

}

console.log(common([-1, 3, 4, 6, 7, 9], [1, 3]))
console.log(common([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]))