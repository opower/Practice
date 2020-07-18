const numberSyllables = (str) => {
  let total = 1;
  for(const i of str){
    if(i === '-'){
      total += 1;
    }
  }

  return total
}

console.log(numberSyllables("buf-fet"))
console.log(numberSyllables("beau-ti-ful"))