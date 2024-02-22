



let arr = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1];


 var leftWing = []
    var rightWing = []
    arr.sort((a, b) => b - a)
      .forEach((el, i) => i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el));
    
    console.log(leftWing,rightWing);
    return [...leftWing, ...rightWing];


