const decrypt = (text, n) => {
  if(n <= 0) return text;
  if(!text) return text;

  for(let i = 0; i < n; i++){
    text = decryption(text);
  }

  return text;
}

function decryption(text){

  let str = text.split("");
  
}