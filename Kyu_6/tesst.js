function binaryArrayToNumber(arr) {
    let counter = 0;
  
    let arrRev = arr.reverse()
    
    for ( i = 0; i<= arr.length; i++){
      if (arr[i] == 1){
        counter +=2**i;
        
      }
     
        
      }
     return counter;
    
    // your code
  };
    
    binaryArrayToNumber([1,1,1,0,1]);
