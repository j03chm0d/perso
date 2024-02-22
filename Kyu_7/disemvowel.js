function disemvowel(str) {
const vowels = ["a","e","i","o","u","y"];
const consonents = []

for (let i = 0; i< str.length; i++){
  console.log(str[i]);

  for (let u = 0; u< vowels.length; u++){

    if (str[i] == vowels[u]){

     consonents.push(str[i])

    }
  }



 




 }

}
  
  
  newString = consonents.join("");
  return newString;
}