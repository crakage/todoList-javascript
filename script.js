var taskSubmitBtn = document.getElementById("taskSubmitBtn");
var todoList = document.getElementById("todoList");
var taskToAdd = document.getElementById("taskToAdd");
//var delBtn = document.getElementsByClassName("dltbtn");

//Get the Value from the Input Field
function getTaskInput(){
	return taskToAdd.value;
}

// Add the value to a new li 
function newLiFn(){
	if (taskToAdd.value !== ""){
			var newLi = document.createElement("li");
			var newLiText = document.createTextNode(getTaskInput());
			var newBtn = document.createElement("button"); //create button
			var newBtnTxt =document.createTextNode("del"); //create button text
			newBtn.appendChild(newBtnTxt); //add txt to button
			newBtn.setAttribute("class", "dltbtn"); //add class to new button will be use to add eventlistener
			newLi.appendChild(newLiText); //add text to new Li
			newLi.appendChild(newBtn) //add button to new ligne
			
			//Add new ligne
			todoList.appendChild(newLi);
			//Clean value in teh textbox
			taskToAdd.value = "";
		}
}
// Delete the line from UL when pressing button
function delLine(event){ 
	var tbutton = event.target; // get the element we clicked
	if (tbutton.className === "dltbtn"){ //check if element is a dlt button
		var temp_parent = tbutton.parentElement; // get the parent and store in variable, here parents = li block
		var gd_parent = temp_parent.parentElement; // get the "grand parent" (UL)
		gd_parent.removeChild(temp_parent); //Kick out the parents from the heritage ^^
	}
}

// Line Through the text
function checkLi(event){
	var t = event.target;
	if(t.tagName === "LI" && t.id !== "li-example"){
		console.log(event.target.tagName);
		event.target.classList.toggle("done");
	}
}

//event listener for clicking submit
taskSubmitBtn.addEventListener("click", newLiFn);

//event listener submit text when pushing Enter
taskToAdd.addEventListener("keypress", (event) => {
	var keyName = event.key;
	if (keyName === "Enter"){
		newLiFn();
		return;
	}
}, false);

//event listener check lign on click
todoList.addEventListener("click", checkLi);

//event listener on delete button 
todoList.addEventListener("click", delLine);






