/*

Ici je dois retourner le plus grand de s1 ou s2 apres avoir retiré les doublons et les avoir trié.
Je pense que je peux utiliser la methode Set pour cela.

*/ 



let function longest(s1, s2) {

    let const a = new Set(s1);
    let const b =  new Set(s2);

    if (a.size <b.size){ return b;}
    else {return a;}


  
  

  }

longest("edf", "dfdfdfdf")
