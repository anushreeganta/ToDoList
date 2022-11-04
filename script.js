var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem(){
  var itemText= toDoEntryBox.value;
  newToDoItem(itemText,false)
  
}

var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedToDoItems);
function clearCompletedToDoItems(){
  var completedList= toDoList.getElementsByClassName("completed");
  
  while(completedList.length>0){
    completedList.item(0).remove();
  }
  
}

var emptyList = document.getElementById("empty-button");
emptyList.addEventListener("click",emptyLists);
function emptyLists(){
 var fullList=toDoList.children;
 
 while (fullList.length>0){
   fullList.item(0).remove();
 }
}

var saveList=document.getElementById("save-button");
saveList.addEventListener("click",saveLists);
function saveLists(){
  var toDos=[];
  
  for(let i=0; i < toDoList.children.length;i++){
    var toDo=toDoList.children.item(i)
  
  
  var toDoInfo ={
    
    "task" : toDo.innerText,
    "completed" : toDo.classList.contains("completed")
  };
  
  toDos.push(toDoInfo);
  
}

localStorage.setItem("toDos", JSON.stringify(toDos))

}




var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed){
  var toDoItem=document.createElement("li");
  var toDoText= document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);
  
  if(completed){
    toDoItem.classList.add("completed")
  }
  
  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState(){
  if (this.classList.contains("completed")){
    this.classList.remove("completed")
  }else{
  this.classList.add("completed");
  }
}

function loadList() {
    if (localStorage.getItem("toDos") !== null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();

