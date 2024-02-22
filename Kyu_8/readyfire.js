

const equipageReadiness = {'Tom':"Aye", "Alex":"Nay"};
const equipageReadiness2 = {'Tom':"Aye", "Alex":"Aye", "Ale":"Aye"};
const equipageReadiness3 = {'Tom':"Aye", "Alex":"Nay"};

// the below code does not work, I am trying to validate with fire only when all is yeah

/*const cannonsReady = (gunners) => {
	let count = 0;
	
	for (const[key, value] of Object.entries(gunners)){
		if (value == "Aye"){
			count += 1
			console.log(count);

		}

		if (count == Object.keys(gunners).length){
			console.log("ready");
			return "Fire";
		}

		else {

		console.log("boo");

		return "Boo";} 
	} */
  
  
  const cannonsReady = (gunners) => {
	let count = 0;
	
	Object.values(gunners).forEach(val => {

		if (val != "Aye"){
			console.log("Nay");
		}

		else console.log("Aye");


	};
  


	
  
  }
  
  //your solution here





cannonsReady(equipageReadiness);
cannonsReady(equipageReadiness2);
cannonsReady(equipageReadiness2);
