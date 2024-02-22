


/*Ici je dois produire une fonction qui prend une serie 
de nombres et retourne la somme de multiplication 
la plus petite possible

const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
  it("should return the minimum sum", function(){
    Test.assertEquals(minSum([5,4,2,3]), 22);
    Test.assertEquals(minSum([12,6,10,26,3,24]), 342);
    Test.assertEquals(minSum([9,2,8,7,5,4,0,6]), 74);
  });


Donc voici le plan a suivre:

Je recupere la plus grande valeur et la plus petite et je les multiplie entre elles 
Je repete l'operation autant de fois que nécéssaire.
J'additionne le résultat.


Pour récupérer le max, j'utilise une fonction reduce
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

const max = Math.max(...arr);









*/

function minSum(arr) {

    let addi = 0;
    let max = 0;
    let min = 0;
    let indexMax = 0;
    let multi = 0;
    

    for (i = 0; i < arr.length / 2; i++) {
        console.log(arr);


        max = Math.max(...arr);
        indexMax = arr.indexOf(max);
        min = Math.min(...arr);
        console.log(`min${min}`);
        indexMin = arr.indexOf(min);
        console.log(indexMin);
        multi = max * min;
        addi += multi;
        arr.splice(indexMax, 1);
        arr.splice(indexMin, 1);
       

    }

    console.log(addi);
}



// this is not yet working...






















