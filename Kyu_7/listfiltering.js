

/*  list of questions I typed

what function is used in javascript to verify something is a number

got https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN








*/


/*


this below function is not working.

function filter_list(l) {
  // Return a new array with the strings filtered out




for (let n = 0; n< l.length; n++){

	if (isNaN(l[n])) {

		l.splice(n,1); 



	}

	console.log(l);

	return l;
}

//function printl(funct){

	//console.log(filter_list(l));
}



*/

//filter_list([1, 2, "a", "b"]);

//filter_list([257, "671", "44", 903, "297", 339, "980", "888", 210, 198]);



// second question: remove all non numbers from an array in js?

/* https://stackoverflow.com/questions/24022682/javascript-jquery-remove-all-non-numeric-values-from-array

referring to array.filter()

 */ 

const lol = [1,2,3556,"abcc", "nan", "123"];
function filter_list2(lul){

	const result = l.filter((number) => typeof(number) === 'number');
	console.log(result);




}

filter_list2(lol);



// it worked, eventually, but best practice suggests function filter_list(l) {
 // return l.filter(function(v) {return typeof v == 'number'})
//}