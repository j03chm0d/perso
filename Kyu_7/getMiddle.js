function getMiddle(s)
{
  
 return s.length%2 == 0? s.substr(s.length/2-1,2):s.substr(Math.ceil(s.length/2),1);
  //Code goes here!
}

getMiddle("A");