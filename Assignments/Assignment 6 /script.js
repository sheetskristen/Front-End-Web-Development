var toDoList = $('.to-do-list'); 
var addButton = $('.add'); 
var newField = $('.new-field');

(addButton).click(function(){
// 	var newItem = prompt("Add a new to do item:");
	var newItem = newField.val(); 
	
	var newToDo = toDoList.find("li").first().clone();
	
	newToDo.text(newItem);
	
	(toDoList).append(newToDo);
	newField

	
});













