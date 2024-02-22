

/*Input : an array of integers.

Output : this array, but sorted in such a way that there are two wings:

the left wing with numbers decreasing,

the right wing with numbers increasing.
*/


/*The way I see it is we can split the problem in different steps 

First sort the array  using array.sort(function(a,b){ return a-b});
because sort defaults to alphabetical.


Then split it in half 

For this phase I queried Stack Overflow
https://stackoverflow.com/questions/9181188/splice-an-array-in-half-no-matter-the-size



then reverse the second part 
then blend the two arrays

*/


function makeValley(arr) {
  
  
	arr.sort(function(a,b){return a-b});
	arr.reverse();
	let leftArray  = [];
	let rightArray = [];
	
   

    console.log(arr.length);
	for (let i=0; i<(arr.length); i++){
		if (arr[i]%2 ==0){
			console.log(arr[i]);
			leftArray.push(arr[i]);
		}
		else rightArray.push(arr[i]);
		console.log(arr[i]);
		

	
		

	}

console.log(arr);
console.log(leftArray);
console.log(rightArray);

rightArray.reverse();
 let newArray = leftArray.concat(rightArray);
 console.log(newArray);
 return newArray;

    
}

makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1 ]);


// I am not yet seeing how to deal with unshift and how it is messing my array value? 
//finish this tomorrow;



// eventually found this solution which looks excellent
//function makeValley(arr) {
    var leftWing = []
    var rightWing = []
    arr.sort((a, b) => b - a)
      .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el))
    
    return [...leftWing, ...rightWing]
}