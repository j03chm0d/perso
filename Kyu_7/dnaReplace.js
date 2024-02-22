var pairs = {'A':'T','T':'A','C':'G','G':'C'};
const DNAStrand = (dna) => dna.split('').map((v) => pairs[v]).join('');



/* J'ai trouvé une solution simple pour cela mais celle ci est plus elegante*/