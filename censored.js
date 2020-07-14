const censored = (str, cen) => {
  return str.replace(/[cen]/gi, '*')
}

console.log(censored("Where did my vowels go?", 'aieou'))