/*


titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
  
  
  
}


Dans ce challenge, il faut mettre tous les mots en title case sauf ceux contenus dans la liste minor
words a moins que celui ci ne soit en premiere position dans le string.

Je pense que la marche a suivre serait premierement de capitaliser tous les mots 
puis de verifier que les mots de la liste minor words soient décapitalisés a partir du second mot.



*/
function titleCase(title, minorWords) {
    let titledWord = []
	let separateWords = title.split(" ");
	let separateMinorWords = minorWords.split(" ");
	
	 let word = [];
	for(let i = 0; i< separateWords.length; i++){
		 // this loop iterates through each word 
	

	for (let j=0 ; j< separateWords[i].length; j++){
		// this loop iterates through each letter of the words

		//console.log([j]);
		if (j == 0){
			word.push(separateWords[i][j].toUpperCase());

		}
		else {
			word.push(separateWords[i][j].toLowerCase());
		}
        
         if (j == separateWords[i].length-1){
         	
         	titledWord.push(word.join(""));
         	word =[];
         }

	

	}
   
	//console.log(word);
	
	
// the words are separated from each other
   



}
for (let i=1; i<titledWord.length; i++){
	for (let j=0; j<separateMinorWords.length; j++){

	if(titledWord[i].toLowerCase() == separateMinorWords[j] ){
		titledWord[i] = separateMinorWords[j];
	}

}}
return titledWord.join(" ");
}


// This function worked on my laptop but not on Codewars 
// here are the solutions I need to study let printer = function(ele){
	console.log(ele);
}



	


printer(titleCase("gdgdgh", "df fe"));
titleCase('THE WIND IN THE WILLOWS', 'The In' );
