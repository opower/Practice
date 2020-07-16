const addEnding = (arr, end) => {
  return arr.map(word => {
    return word + end
  })
}

console.log(addEnding(["bend", "sharpen", "mean"], "ing"))