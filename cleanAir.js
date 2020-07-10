function checkAir(samples, thres) {

  let clean = 0;
  let dirty = 0;

  for(const i of samples){
    i === 'clean' ? clean = clean + 1 : dirty = dirty + 1;
  }

  return dirty / samples.length > thres ? 'Polluted' : 'Clean'
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));
console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))