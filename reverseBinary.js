const reverseBinary = (num) => {
  let binary = num.toString(2);
  let reverse = '';

  for(let i = binary.length -1; i >= 0; i--){
    reverse += binary[i] 
  }

  return parseInt(reverse, 2);
}

console.log(reverseBinary(10))
console.log(reverseBinary(12))
console.log(reverseBinary(25))
console.log(reverseBinary(45))