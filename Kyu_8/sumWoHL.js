/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/



// https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array



function sumArray(arraye) {

	if (Array.isArray(arraye) && arraye.length > 3){
		const i = arraye.indexOf(Math.max(...arraye));
		const j = arraye.indexOf(Math.min(...arraye));
        console.log(i);
        console.log(j);
		arraye.splice(i,1);
		arraye.splice(j,1);

		console.log(arraye)

		let total = arraye.reduce(function(sum, value){
			return sum + value;
		},0);
        console.log(total);
		return total;


	} 


	else {
		console.log("error");

		return 0;

	



}}
sumArray([-2,-1,10,-6,-8]);

sumArray([-2,-1,10,-6,-7]);
sumArray([-2,-1,10,-6,-7]);
sumArray([-2,-1,10,-6,-7]);
/*sumArray([-1,2,3,-4,5,6,7,8]);
sumArray([-100, -699, 56,45]);
sumArray([-99, -454,10,12]); */


/* Il y a un probleme avec cette fonction car elle retourne des valeurs fausses
parfois seulement  */ 



// 	A tort ou a raison je m'essaye a pouvoir importer des modules sur Node JS REPL



