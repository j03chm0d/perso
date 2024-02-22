
console.log("hello");
const _ = require("lodash");


/* L'idée ici semble de faire un mapping entre le tableau de valeur et les lettres, de récuperer le score, et ensuite de retourner le plus petit string avec la valeur maximalee.


You're playing to scrabble. But counting points is hard.

You decide to create a little script to calculate the best possible value.

The function takes two arguments :

    `points` : an array of integer representing for each letters from A to Z the points that it pays
    `words` : an array of strings, uppercase


You must return the index of the shortest word which realize the highest score.

If the length and the score are the same for two elements, return the index of the first one.
*/
var points = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pointsArray =  [];



var simpleWords = ["AAAA", "ZZZZZZZ","DFDFE","ASSSD"];
let wordValue = 0;
for (letter in simpleWords){

    let  worrd = simpleWords[letter];

    for (char in worrd){
        let indexLetter = alphabet.indexOf(worrd[char]);
        let value = points[indexLetter];
        
        wordValue += value;
        }
    pointsArray.push([worrd, wordValue]);
    wordValue = 0;
    
   
   
    
   
    
}

console.log(pointsArray);



//console.log(Math.max(...Object.values(pointsArray)));



// J'ai pu experimenter un peu avec la création de dictionnaire et avancer légerement sur le probleme.



// Ok je pense que c'est un bon stop point, ici je dois uniquement comparer les scores et retourner le bon mot.







