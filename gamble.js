const gamble = (prob, prize, pay) => {

  return prob * prize > pay ? true : false
}

console.log(gamble(0.2, 50, 9))

console.log(gamble(0.9, 1, 2))
