var date = new Date();
var now = new Date();

date.setFullYear(2002);
date.setMonth(8);
date.setDate(11);

var diff = now.getTime() - date.getTime();

console.log("You are this year old: "+ Math.ceil((diff/1000)/60/60/24/30/12));
console.log("You are this month old: "+ Math.ceil((diff/1000)/60/60/24/30));
console.log("You are this days old: "+ Math.ceil((diff/1000)/60/60/24));
console.log("You are this hours old: "+ Math.ceil((diff/1000)/60/60));
console.log("You are this minutes old: "+ Math.ceil((diff/1000)/60));




