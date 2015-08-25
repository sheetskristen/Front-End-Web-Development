var addend1 = 5;
var addend2 = 10;
  
var sum = addend1 + addend2;
 
console.log(sum); 
 
/* alert("The sum is "+ sum); 
  
var isItFifteen = confirm("The sum is 15??");
 
sum = prompt("What is the sum?"); */

var age = prompt("How old are you?");

age = parseInt(age); 

if(isNaN(age)) {
	alert("You screwed up!");
} else if (age < 200){
	alert("You're so young!");
}

/*
= assigns variables 
==  abstract comparison/converts operands to the same type b4 comparison
=== means equals/strict comparison
*/ 

