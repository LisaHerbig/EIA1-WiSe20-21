
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
         let newTask: HTMLElement = document.createElement("li");
         newTask.setAttribute ("id", "newListElmt");
         taskDiv.appendChild(newTask);

        //in der Liste soll der Input des Feldes stehen/
         let myInputElement: HTMLInputElement = document.querySelector(".myInput");
         let inputValue: string = myInputElement.value;
         newTask.innerHTML = inputValue;
    
         //Div in das alles hineinkommt/
         let checkDiv: HTMLElement = document.createElement("div");
         checkDiv.setAttribute("id", "checkdiv");
         newTask.appendChild(checkDiv);

        //checkbox soll zu meinem ListenElement hinzugefügt werden/
         let checkBox: HTMLElement = document.createElement("input");
         checkBox.setAttribute("type", "checkbox");
         checkBox.setAttribute("id", "check");
         checkDiv.appendChild(checkBox);

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
document.getElementById ("deleteMe").addEventListener("click", function(): void {
    let löschen: HTMLElement = document.getElementById("taskdiv");
    löschen.remove();
});





/*anders zählen, bzw. Selektion anpassen, Papa fragen..., alles in divs packen damit alles schön zusammen ist (checkbox, deletebutton, liste,...*/