const initial = (str) => {

  const regex = /\s*[A-Z]\.[A-Z]\./
  return str.match(regex) ? true : false 
}

console.log(initial('   A.B.'))
console.log(initial('A. B.'))
console.log(initial('A.B'))