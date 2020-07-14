const sumOE = (number) => {
  let num = number.toString().split('');
  let sum = 0;
  for(const i of num){
    sum += Number(i);
  }

  return sum % 2 === 0 ? 'Evenish' : 'Oddish'
}

console.log(sumOE(4433))
console.log(sumOE(373))
console.log(sumOE(43))