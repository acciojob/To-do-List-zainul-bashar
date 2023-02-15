//your code here
var btn=document.getElementById("addTodoBtn");
var input=document.getElementById("newTodoInput");
var ol=document.getElementById("todoList");
btn.addEventListener("click",addList);
function addList(){
	if(input.value){
		var li=document.createElement("li");
		li.textContent=input.value;
		ol.appendChild(li);
		input.value="";
	}
	
}

