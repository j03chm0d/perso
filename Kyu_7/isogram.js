

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)*/


// en gros je dois verifier que chaque lettre n'est utilisée qu'une fois.

/*J'y suis allé direct en faisant une recherche sur so
how to check that a letter is used onlt once in js */







    
  function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

//cette fonction créée un set de tous les characteres mis en majuscul et verifie
// si les la taille du set unique est egale a la taille du string de base


/*On peut aussi passer par un truc comme ca function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
} mais c'est beaucoup plus long.*/ 


  
  
  
  
  //...


charRepeats("aba");