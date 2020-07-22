const missingAngle = (num1, num2) => {

  const sum = 180;
  const angle = num1 + num2
  if(sum - angle  < 90){
    return 'acute'
  } else if (sum - angle === 90){
    return 'right'
  } else {
    return 'obtuse'
  }
}
console.log(missingAngle(27, 59))
console.log(missingAngle(135, 11))
console.log(missingAngle(45, 45))
console.log(missingAngle(125, 11))
console.log(missingAngle(30, 60))