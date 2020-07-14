const sevenBoom = (arr) => {

  for(const i of arr){
    let number = i.toString().split('')
    if(number.includes('7')){
      return 'Boom!'
    }
  }
  return "No 7's in array!"
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))

console.log(sevenBoom([8, 6, 33, 100]))

console.log(sevenBoom([2, 55, 60, 97, 86]))