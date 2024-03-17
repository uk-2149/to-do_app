const inputBox = document.getElementById("input_task");
const listContainer = document.getElementById("task_container");

function addtask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

window.addEventListener(
    "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; 
    }
    switch (event.key) {
        case "Enter":
            addtask();
        default:
            return;
    }
    event.preventDefault();
},
true,
);

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } 
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

