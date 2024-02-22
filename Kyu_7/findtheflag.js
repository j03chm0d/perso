




// L'idee de cet exercice est de trouver un flag dans un texte. je veux utiliser chat gpt pour trouver le bon
// pattern /\{([A-Z]-)+[A-Z]\}/ 

function getSubstring(string, char1, char2) {
  return string.slice(
    string.indexOf(char1) + 1,
    string.lastIndexOf(char2),
  );process.cpuUsage(prevValue);
}


// thinking about the possibility that the flag may be hidden function *permute(a, n = a.length) {
 // if (n <= 1) yield a.slice();
 // else for (let i = 0; i < n; i++) {
    //yield *permute(a, n - 1);
   // const j = n % 2 ? 0 : i;
    //[a[n-1], a[j]] = [a[j], a[n-1]];
  //}
//}

//console.log(Array.from(permute("abcabad".split('')))
//.map(perm => perm.join(''))
//.filter((el, idx, self) => (self.indexOf(el) === idx)));