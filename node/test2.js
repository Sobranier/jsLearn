

console.log(1);
setTimeout(function(){console.log(4);}, 2000);
setTimeout(function(){console.log(3);}, 1000);
setTimeout(function(){console.log(2);}, 0);
console.log(5);
