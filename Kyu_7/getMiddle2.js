


function getMiddle(s)
{
    if (s.length ==1){
    	console.log(s)
    }
	else if (s.length%2 ==0){
		console.log(s.substr(s.length/2-1,2))
	}
	else {
		console.log(s.substr(Math.ceil(s.length/2-1),1))
	}
  
}


getMiddle("hello");
getMiddle("A");
getMiddle("testing")
getMiddle("middle")