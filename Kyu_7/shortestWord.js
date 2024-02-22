

/* Cette fonction doit permettre de recupérer le nombre de
charactere le plus petit d'un string - donc
dans un premier lieu on decoupe le string, puis on retourne le math.min */



function findShort(s){

    let sWords = s.split(" ").map((i) => i.length);
    console.log(sWords);
    console.log(Math.max(...sWords));
   
    return Math.min(...sWords);




  
  
}

findShort("hello world goggogogo");

/*
// const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length; */ // j"aime bien cette solution