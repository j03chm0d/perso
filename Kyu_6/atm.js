/* An ATM ran out of 10 dollar bills and only has 100, 50 and 20 dollar bills.

Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).







*/




function withdraw(n) {

arr = []

let hunDolNotes = Math.floor(n/100);
if (n%100%50%2 !=0){}
let fifDolNotes = Math.floor(n%100/50);
let twenDolNotes = Math.floor(n%100%50/20);


console.log(hunDolNotes);
console.log(fifDolNotes);
console.log(twenDolNotes);


arr.push(hunDolNotes);
arr.push(fifDolNotes);
arr.push(twenDolNotes);

console.log(arr);
return arr;


    
    //coding and coding..
    
    
  }

  withdraw(7579930);

  