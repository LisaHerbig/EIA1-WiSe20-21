
  

namespace Aufgabe11 {
/*
 Erstellen eines Interfaces
*/
interface ToDoInterface {
    title: string;
    done: boolean;
}

/* 
Erstellen eines Objektes
*/
var todoObject: ToDoInterface [] = [
    {
        title: "EIA fertig machen",
        done: false
    },
    {
        title: "Tee trinken",
        done : true
    }
];

 /* Variablen deklariert, die später die entsprechenden DOM-Elemente
 * speichern.
 */

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

/**
 * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
 * initialisiert werden
 */
window.addEventListener("load", function(): void {

    /*
     * wichtigsten Elemente
     * in ihre Variablen gespeichert werden, um später auf sie 
     * zugreifen zu können
     */
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

    let index: number = 0;
    

    /**
     * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
     * auf den AddToDo Button gesetzt werden.
     */
    addButtonDOMElement.addEventListener("click", function (): void {
    addTodo ();
    zaehler_aktualisieren(index);
});
        
    /**
     * Initial soll einmal die Liste an bereits definierten ToDos
     * aus den Arrays in den DOM gezeichnet werden.
     */
    drawListToDOM();
});


function drawListToDOM(): void {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";

    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (let index: number = 0; index < todoObject.length; index++) {

        /**
         * Neues DIV-Element erstellen
         */
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        /*
         * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
         *  als eine lange
         * HTML-Zeichenkette erstellt. 
         */

        todo.innerHTML =  "<span class='check " + todoObject[index].done + "'><i class='fas fa-check'></i></span>"
                            + todoObject[index].title +
                            "<span class='trash fas fa-trash-alt'></span>";

        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function(): void {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
            toggleCheckState(index);
            zaehler_aktualisieren (index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
            bei_loeschen (index);
            //deleteTodo(index);
        });

        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = todoObject.length + " in total";
}

/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo(): void {
    /**
     * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
     * (ansonsten würde ein leerer ToDo-Text erstellt werden,
     * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
     */
    if (inputDOMElement.value != "") {
        /**
         * Der Eingabe-Wert aus dem Input-Feld (.value) wird 
         * als neues Element in das ToDo-Array gepusht.
         * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
         * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
         * der Status "unchecked", hier false, gepusht.
         */
        todoObject.unshift({
            title: inputDOMElement.value,
            done: false });
        
        console.log(todoObject);
        
            
        // Jetzt wird der Text aus dem Eingabefeld gelöscht
        inputDOMElement.value = "";

        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
}

/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index: number): void {

    /**
     * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
     * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
     * an der übergebenen Index-Stelle) geändert werden.
     * Von checked zu unchecked bzw. von unchecked zu checked
     * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
     * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
     * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
     * kurz schreiben: wert = !wert
     * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
     * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
     * Kurs behandelt wurden) nutzen.
     */
    todoObject[index].done = !todoObject[index].done;
    console.log(todoObject[index].done);
    
    
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();
}

/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index: number): void {
    /**
     * Durch "index" ist die entsprechende Stelle im Array
     * bekannt, an der das ToDo steht.
     * Jetzt muss diese Stelle beider Arrays gelöscht werden,
     * das ToDo-Text-Array und das Checked/Unchecked-Array
     */
    todoObject.splice(index, 1);
    
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();

    /*
    Zähler neutralisieren
    */
    
}

    /*
    Deklaration der Zählervariablen für ToDo, Open und Done*/
let zaehlerDone: number = 0;
let zaehlerTodo: number = 0;
//let index: number = 0;

    /*
       Zählerfunktion erweitern,  wird überprüft, ob der Wert von "done" 
       wahr oder falsch ist. Ist der Wert wahr, wird die Variable ZaehlerDone 
       um eins erhöht. Ist der wert != wahr, wird der zaehlerToDo um eins erhöht.
    */
function zaehler_aktualisieren (index: number): void {
  
            if (todoObject[index].done != false) {
                zaehlerDone ++;
                zaehlerTodo --;
                console.log("hihi");
               
                
                
            } else {
                zaehlerTodo ++;
                console.log("fne");
}
        
            console.log(zaehlerDone);
            console.log(zaehlerTodo);  
    }

function bei_loeschen (index: number): void {
    if (todoObject[index].done == true) {
    zaehlerDone --;
    deleteTodo (index);
    } else {
        alert("Diese Aufgabe ist noch nicht erledigt!");
    }
}

    
document.getElementById("zuTun").innerHTML = zaehlerTodo + "ToDo";
document.getElementById("Done").innerHTML = zaehlerDone + " fertig";
















}