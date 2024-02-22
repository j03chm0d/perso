

function getAverage(marks){
          return Math.floor(marks.reduce((a, b) => a + b, 0)/marks.length);
};


// the argument marks stands for an array, I use an accumulator in order to simplify the summing part.