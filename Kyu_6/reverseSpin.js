/*https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript 


"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

Il faut inverser les chaines de caractere de plus de 5 chars dans la chaine de caracteres principale passée en argument.

let reversedStra = stra.split("").reverse().join("");

*/



// function spinWords(string){



// }

    
newFunction("Nassor and Igor successfully debugged their code");






  
  

function newFunction(string) {
    

    let arrayStrA = string.split(" ");
    

    for (let word in arrayStrA) {
        //console.log(arrayStrA[word]);
        if (arrayStrA[word].length >= 5) {

            arrayStrA[word] =arrayStrA[word].split("").reverse().join("");


            //console.log(word);
        }
        
    }
    console.log(arrayStrA.join(" "));
    return arrayStrA.join(" ");;
}
  //TODO Have fun 

