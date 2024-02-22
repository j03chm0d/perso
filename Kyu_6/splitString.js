/*https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript*/

/*

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

En gros il faut découper un string en bloc de deux characteres et les mettre dans un array
si jamais le nombre des caractères est impair, ajouter un _ au dernier caractère.





*/

function solution(str){

    arr= [];

    for (i=0; i<= str.length-1; i+=2){

       

        if (i == str.length-1 && str.length%2 != 0){
            console.log(i);
            arr.push(str[i]+"_");
            console.log(arr);
            
            
            return arr;
        }
        arr.push(str.slice(i,i+2));
       



    }

    return arr;
    
    

    
  
  
   
}

solution("agd");
solution("agde");
solution("abcdef");

