


function catchSignChange(arr) {
  
  
  let count = 0;
  for (c = 0; c< arr.length-1; c++){
    if (Math.sign(arr[c]) != Math.sign(arr[c+1])){
      
      count += 1;
    }
    else if (Math.sign(arr[c]) == -1 && Math.sign(arr[c+1] == 0)){
      count +=1;
    }
    
     else if (Math.sign(arr[c]) == 0 && Math.sign(arr[c+1] == 1)){
      count +=1;
    }
    
    
  }


  // L'objectif ici est de compter le nombre de changement de signe, le problème de ma solution que j'ai ébauchée ici est que 
  // le zero est rendu comme zéro au lieu d'un nombre positif, donc il faut que je traite le zéro de manière différente 
// below is another attempt

  function catchSignChange(arr) {
  
  
  let count = 0;
  for (c = 0; c< arr.length-1; c++){
    if (Math.sign(arr[c]) + Math.sign(arr[c+1]) == 0){
      
      count += 1;
    }
    else if (Math.sign(arr[c]) == -1 && Math.sign(arr[c+1] == 0)){
      count +=1;
    }
    
   
    
    
  }

  // the solution to the exercise is below, I actually did not need to use the sign method

  const catchSignChange = function(arr){
  var count=0;
  for (i=0; i<arr.length; i++){
    if ((arr[i]<0 && arr[i+1]>=0) || (arr[i]>=0 && arr[i+1]<0)){
    count++;
    }
  };
  return count;
};