const average = (arr) => {
  let total = 0;
  
  for(const i of arr){
    total += i;
  }

  return total / arr.length
}

console.log(average([1,2,3]))