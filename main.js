//Assigning elements to the variables and constants
const textField = document.querySelector(".text-field");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".list");



//adding click event listener to the add button
addButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

//Calling digitalClock method after every 1000 millisecond
setInterval(digitalClock,1000)

function digitalClock(){
    var date = new Date();

    //fetching present hour, minutes and seconds
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM"

    //Using if conditions for creating 12hr format clock
    if(h>12){
        h = h - 12;
        session = "PM"
    }
    if(h == 0){
        h = 12;
        session = "AM"
    }

    //Adding string 0 if any numbers are less than 10 i.e. double digit form
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    var currentTime = h + ":" + m + ":" + s + " " + session;
    document.querySelector(".clock").innerText = currentTime;
}

//Calling digitalClock method for executing for the first time
digitalClock();
 

function addTodo(event){
    //preventing the page from submitting the value in text field i.e. removing default action
    event.preventDefault();

    //Creating div element and assigning its class name
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Creating li element and assigning its class name
    const todoLi = document.createElement("li");
    todoLi.classList.add("list-item")

    //Assigning the value of the text field to the list li
    todoLi.innerText = textField.value;
    
    //Appending list to the div
    todoDiv.appendChild(todoLi);

    //Creating button elements
    const checkButton = document.createElement("button")
    checkButton.innerHTML = '<i class="fas fa-check"</i>';
    checkButton.classList.add("check-button");
    todoDiv.appendChild(checkButton);

    const removeButton = document.createElement("button")
    removeButton.innerHTML = '<i class="fas fa-trash"</i>';
    removeButton.classList.add("remove-button");
    todoDiv.appendChild(removeButton);

    todoList.appendChild(todoDiv);

    //Resetting the value of text field to empty
    textField.value = "";
}


function deleteCheck(e){
    const item = e.target; 
    const todo = item.parentElement;
    console.log(item.parentElement);

    //Comparing the class of the clicked element and checking using === operator in if statement
    if (item.classList[0] === "remove-button") {
        todo.remove();
    }

    if (item.classList[0] === "check-button") {
        todo.classList.toggle('done');
    }
}
