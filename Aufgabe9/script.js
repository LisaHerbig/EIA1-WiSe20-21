//Zählen
var toDo = document.getElementById("openTasks");
var openTasks = 0;
function countOpenTasks() {
    toDo.innerHTML = openTasks + " Open Tasks";
}
//Funktion, die, wenn der Input nicht leer ist, dem Objekt ein Array hinzufügt/
function pushTask() {
    {
        var uLTasks = document.getElementById("ToDoList");
        //Div in das alles hineinkommt/
        var taskDiv_1 = document.createElement("div");
        taskDiv_1.setAttribute("id", "taskdiv");
        uLTasks.appendChild(taskDiv_1);
        //Neues ListenElement/
        var newTask = document.createElement("li");
        newTask.setAttribute("id", "newListElmt");
        taskDiv_1.appendChild(newTask);
        //Variablen für den Inhalt des eingegebenen Textfeldes
        var myInputElement = document.querySelector(".myInput");
        var inputValue = myInputElement.value;
        //in der Liste soll der Input des Feldes stehen/
        newTask.innerHTML = inputValue;
        myInputElement.value = "";
        //Div für die Checkbox/
        // let checkDiv: HTMLElement = document.createElement("div");
        //checkDiv.setAttribute("id", "checkdiv");
        //newTask.appendChild(checkDiv);
        //checkbox soll zu meinem ListenElement hinzugefügt werden/
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", "check");
        newTask.appendChild(checkBox);
        //DeleteButton soll hinzugefügt werden/
        var deleteBtn = document.createElement("i");
        deleteBtn.setAttribute("class", "fas fa-trash-alt");
        deleteBtn.setAttribute("id", "deleteMe");
        newTask.appendChild(deleteBtn);
        //DeleteTask
        deleteBtn.addEventListener("click", function () {
            deleteTask(taskDiv_1);
        });
    }
}
//Funkion für das Löschen des Tasks
function deleteTask(taskDiv) {
    taskDiv.remove();
    openTasks--;
    countOpenTasks();
}
//Bei Enter(jetzt noch click ^^) soll pushtask ausgeführt werden/
document.getElementById("myBtn").addEventListener("click", function () {
    pushTask();
    openTasks++;
    countOpenTasks();
});
// DeleteButton
var deleteButton = document.getElementById("deleteMe");
deleteButton.addEventListener("click", function () {
    var löschen = document.getElementById("taskdiv");
    löschen.remove();
});
//# sourceMappingURL=script.js.map