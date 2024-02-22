/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]




En gros il faut nettoyer se debarasser des doublons et maintenir l'ordre des elements 


Je dois pouvoir gérer le cas ou iterable est un array





*/


function uniqueInOrder(iterable){

     
      
	 let arsdsd = iterable.split("");

	

	

	
		
		for (j = arsdsd.length-1; j>0; j--){
		if (arsdsd[j] == arsdsd[j-1]){
			arsdsd.splice(j,1)
			console.log(arsdsd);
			console.log(arsdsd.length)

		}}
	
  console.log(arsdsd);
  
  
  
}



uniqueInOrder("aaaaaaaaaaaaaaaaaaa");