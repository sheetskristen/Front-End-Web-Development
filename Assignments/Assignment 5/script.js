
var createName = function (first, last){ 
	return first + " " + last; 
} 
	
var askName = function (){
	var first = prompt ("What's your first name?");
	var last = prompt ("What's your last name?");
	var fullName = createName(first, last); 
	/*alert ("Your name is " + fullName + "!"); */
	if (fullName !== "Murray Stenson") {
		askName();
	}
	else {
		alert ("Your name is " + fullName + "!");
	}
} 

askName(); 	
	






