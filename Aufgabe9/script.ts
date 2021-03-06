
//Zählen
let toDo: HTMLElement = document.getElementById("openTasks");
let openTasks: number = 0;
function countOpenTasks (): void {
    toDo.innerHTML = openTasks + " Open Tasks";
}


         
//Funktion, die, wenn der Input nicht leer ist, dem Objekt ein Array hinzufügt/
function pushTask (): void {
     {
         let uLTasks: HTMLElement = document.getElementById("ToDoList");
         //Div in das alles hineinkommt/
         let taskDiv: HTMLElement = document.createElement("div");
         taskDiv.setAttribute("id", "taskdiv");
         uLTasks.appendChild(taskDiv);
         
         
        //Neues ListenElement/
         let newTask: HTMLLIElement = document.createElement("li");
         newTask.setAttribute ("id", "newListElmt");
         taskDiv.appendChild(newTask);

         //Variablen für den Inhalt des eingegebenen Textfeldes
         let myInputElement: HTMLInputElement = document.querySelector(".myInput");
         let inputValue: string = myInputElement.value;

        //in der Liste soll der Input des Feldes stehen/
         newTask.innerHTML = inputValue;
         myInputElement.value = "";
         
    
         //Div für die Checkbox/
        // let checkDiv: HTMLElement = document.createElement("div");
         //checkDiv.setAttribute("id", "checkdiv");
         //newTask.appendChild(checkDiv);

        //checkbox soll zu meinem ListenElement hinzugefügt werden/
         let checkBox: HTMLInputElement = document.createElement("input");
         checkBox.setAttribute("type", "checkbox");
         checkBox.setAttribute("id", "check");
         newTask.appendChild(checkBox);

        //DeleteButton soll hinzugefügt werden/
         let deleteBtn: HTMLElement = document.createElement("i");
         deleteBtn.setAttribute("class", "fas fa-trash-alt");
         deleteBtn.setAttribute("id", "deleteMe");
         newTask.appendChild(deleteBtn);

         //DeleteTask
         deleteBtn.addEventListener("click", function(): void {
             deleteTask(taskDiv);
         });
         
        }
    
    }

//Funkion für das Löschen des Tasks
function deleteTask (taskDiv: HTMLElement): void {
taskDiv.remove(); 
openTasks --;
countOpenTasks();
}

//Bei Enter(jetzt noch click ^^) soll pushtask ausgeführt werden/
document.getElementById ("myBtn").addEventListener("click", function (): void {
    pushTask();
    openTasks ++;
    countOpenTasks();
});



// DeleteButton
let deleteButton: HTMLElement = document.getElementById("deleteMe");
deleteButton.addEventListener("click", function(): void {
    let löschen: HTMLElement = document.getElementById("taskdiv");
    löschen.remove();
});







