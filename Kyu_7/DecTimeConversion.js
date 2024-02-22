/*https://www.codewars.com/kata/6397b0d461067e0030d1315e/train/javascript*/

const { isInteger } = require("lodash");

function toIndustrial(time){
    
    if isInteger(time){
        industrialMins = (time/60)*36;
        console.log(industrialMins);
      

    }
   
    
  
    return 0;
  }



toIndustrial(120);