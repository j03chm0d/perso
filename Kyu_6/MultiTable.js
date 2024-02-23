/*https://www.codewars.com/kata/61efc02e4fd88600343b5c58/train/javascript


multiplicationTable = function(size) {
  // insert code here
}


d'après ce que j'ai compris il faut récuper la table de multiplication 
et retourner autant d'array que le nombre est élevé.




*/




  let multi = 3;
  let arrPrincipal = [];

  arrPrincipal.push([...Array(multi).keys()]);
  console.log(arrPrincipal);

  for (element in arrPrincipal[0]){
    arrPrincipal[0][element]  +=1;
  }

  for (i = 0; i< arrPrincipal[0].length-1; i++){
    arrPrincipal.push(arrPrincipal[0]);
  }

  for (i = 0; i<= arrPrincipal.length; i++){
    for (element in arrPrincipal[i]){
        console.log(element);
        arrPrincipal[i][element] += 1;
    }
  }

  console.log(arrPrincipal);




