



//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

/* En gros je dois faire un sort descendant*/


// length or array operation number[i] does not work in js therefore my question:
/*How to split a number in js. J'ai également completement réutilisé le bubble sort https://rajat-m.medium.com/implement-5-sorting-algorithms-using-javascript-63c5a917e811


https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits



J'ai trouvé cette methode

 var num = 278;
var digits = [];
while (num != 0) {
    digits.push(num % 10);
    num = Math.trunc(num / 10);
}
digits.reverse(); pas besoin de ca
console.log(digits);

qui permet de recuperer les chiffres */

/*

function descendingOrder(n){


	var digits = [];
	while (n!= 0){
		digits.push(n % 10);
		n = Math.trunc(n /10);
		console.log(digits);

	}

	for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length - i - 1; j++) {
        	
            if (digits[j + 1] > digits[j]) {
                // ES6 way of swapping array elements
                [digits[j + 1], digits[j]] = [digits[j], digits[j + 1]];
            }
        }
    }
    console.log(digits.join(""));
    return digits;
  //...
}

descendingOrder([740235261]);



Finally the below function works but can be expressed much more succintly with 
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

*/

function descendingOrder(n){


    var digits = [];
  if (n == 0){
    return 0;
  }
  
  else if (n<9){
    return n;
  }
    while (n!= 0){
        digits.push(n % 10);
        n = Math.trunc(n /10);
        console.log(digits);

    }

    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length - i - 1; j++) {
            
            if (digits[j + 1] > digits[j]) {
                // ES6 way of swapping array elements
                [digits[j + 1], digits[j]] = [digits[j], digits[j + 1]];
            }
        }
    }
    
    return parseInt(digits.join(''));;
  //...
}