
//S, R, M 
//lowercase means not ava. uppercase means ava
//return false if not spot return coords for first spot
const whereCanIPark = (arr, str) => {

  let spot = [];

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(str === 'regular'){
        if(arr[i][j] === 'R'){
          spot.push(j);
          spot.push(i)
        }
      }
      if(str === 'small'){
        if(arr[i][j] === 'S'){
          spot.push(j);
          spot.push(i)
        }
      }
      if(str === 'motorcycle'){
        if(arr[i][j] === 'M' && spot.length === 0|| arr[i][j] === 'S' && spot.length === 0 || arr[i][j] === 'R' && spot.length === 0){
          spot.push(j);
          spot.push(i);
        }
      }
    }
  }

  return spot.length === 0 ? false : spot
}
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));
console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))