const encryption = (text) => {
  let str = text.split('')
  let str1 = '';
  let str2 = '';
  for(const i in str){
    if(i % 2 !== 0){
      str1 += str[i]
    } else {
      str2 += str[i]
    }
  }
  return str1+str2;
}

function encrypt (text, n){

  if(!text) return text;
  if(n <= 0) return text;

    for(let i = 0; i < n; i++){
      text = encryption(text);
    }

  return text;
}



console.log(encrypt('This is a test', 2))