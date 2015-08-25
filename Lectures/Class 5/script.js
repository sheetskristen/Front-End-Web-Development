var myFavoriteNumbers = [13, 69, 420, 666]; 

if (myFavoriteNumbers.length === 4) {
	console.log("My Favorite Numbers is 4")
	console.log("2nd console log")
	console.log("3rd console log")
}

var i = 0;
while (i < myFavoriteNumbers.length) {
	console.log("The value of i is " + i);
	i += 1;
}

for (var i = 0; i < myFavoriteNumbers.length; i += 1) {
	console.log(myFavoriteNumbers[i]);
}

var me = {
	name: "Kristen", 
	age: 23, 
	location: "San Francisco", 
	favoriteFoods: [
		"fruits", 
		"cheese", 
		"ice cream", 
		"spicy"
	],
	siblings: [
		{
			name: "Andrew", 
			age: 20, 
			location: "Reno"
		}, 
		{
			name: "?????",
			age: NaN,
			location: "your heart",
	  	
		}
	]
};

console.log(me["location"]); 

var addend1 = "hooray";
var addend2 = 8;

var add = function (addend1, addend2) {
	var something = me.favoriteFoods[0];
	alert ("Kristen's favorite food is " +something);
	console.log("addend1 living in the global scope is " + window.addend1)
	return addend1 + addend2; 
}

var sum = add(1,2); 

var yay = function () {
	console.log('hooray!!!');  
}

var resultOfYay = yay();

var helloWorld = function (hello, world) {
	return hello + world;
}

console.log(helloWorld("hello"));

var giveMeSomething = function (obj) {
	if (typeof obj === "object")
	return obj.something
}


giveMeSomething(); 

var changeMyFavoriteNumbers = function () {
	myFavoriteNumbers[0] = 1234567890; 
}; 

changeMyFavoriteNumbers(); 
	

/*
+= adds a number to a variable 
++ adds 1 
same holds for - 
*/

