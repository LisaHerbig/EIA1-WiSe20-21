
namespace Aufgabe8 {
    /* Array mit mehreren Funktionsblöcken*/

    let SOUNDS: HTMLAudioElement[] =
        [
            new Audio("music/A.mp3"),
            new Audio("music/C.mp3"),
            new Audio("music/F.mp3"),
            new Audio("music/G.mp3"),
            new Audio("music/hihat.mp3"),
            new Audio("music/kick.mp3"),
            new Audio("music/laugh-1.mp3"),
            new Audio("music/laugh-2.mp3"),
            new Audio("music/snare.mp3")
        ];


    /*Aufruf der verschiedenen Variablen und Element Listener*/

    document.querySelector("#box1").addEventListener("click", function (): void {
        playSample(SOUNDS[0]);
        record (0);
    });

    document.querySelector("#box2").addEventListener("click", function (): void {
        playSample(SOUNDS[1]);
        record (1);
    });

    document.querySelector("#box3").addEventListener("click", function (): void {
        playSample(SOUNDS[2]);
        record (2);
    });

    document.querySelector("#box4").addEventListener("click", function (): void {
        playSample(SOUNDS[3]);
        record (3);
    });

    document.querySelector("#box5").addEventListener("click", function (): void {
        playSample(SOUNDS[4]);
        record (4);
    });

    document.querySelector("#box6").addEventListener("click", function (): void {
        playSample(SOUNDS[5]);
        record (5);
    });

    document.querySelector("#box7").addEventListener("click", function (): void {
        playSample(SOUNDS[6]);
        record (6);
    });

    document.querySelector("#box8").addEventListener("click", function (): void {
        playSample(SOUNDS[7]);
        record (7);
    });

    document.querySelector("#box9").addEventListener("click", function (): void {
        playSample(SOUNDS[8]);
        record (8);
    });


    /*Allgemeine Funktion*/

    function playSample(soundName: HTMLAudioElement): void {
        soundName.play();
    }


    /*Array für den Beat*/

    let sequence: number[] = [4, 5, 8, 8, 4, 8, 4, 4, 5, 8, 5, 5, 8, 4, 5, 8, 4];
    let indexOfSequence: number = 0;


    /*Flag für Stop und Start*/

    let runFlag: number = 1;
    
    /*Funktion für den Beat mit Loop*/

    function playBeat(): void {
        setInterval(function (): void {
            if (indexOfSequence < sequence.length &&  runFlag == 1) {

                playSample(SOUNDS[sequence[indexOfSequence]]);
                indexOfSequence = indexOfSequence + 1;

            } else {

                indexOfSequence = 0;
            }
        },          500);
    }

/*Aufruf und EventListener Stop*/

    document.querySelector("#stopBtn").addEventListener("click", function (): void {
        runFlag = 0;

    });


    /*Aufruf und EventListener Start*/

    document.querySelector("#playBtn").addEventListener("click", function (): void {
        playBeat();
        runFlag = 1;
    });


    /*Play-Button soll bei Klick zu Stop-Button werden*/
    /*Variablen für die Buttons*/

    const play: HTMLElement = document.getElementById("playBtn");
    const stop: HTMLElement = document.getElementById("stopBtn");


    /*Funktion für das Wechseln der Klassen*/

    function toggleButtons(playButton: HTMLElement, stopButton: HTMLElement): void {
        playButton.classList.add("hideIt");
        stopButton.classList.remove("hideIt");
    }


    /*Aufruf der Funktion für das Wechseln der Klassen*/

    play.addEventListener("click", function (): void {
        toggleButtons(play, stop);
    });

    stop.addEventListener("click", function (): void {
        toggleButtons(stop, play);
    });




    /*RecordButton*/

    
    function record (mynum: number): void {
        sequence.push(mynum);
    }

    document.getElementById("recordBtn").addEventListener ("click", function(): void {
        sequence.push();
    });

    

    
    

    /*DeleteButton*/

    document.getElementById("deleteBtn").addEventListener("click", function (): void {
        sequence.pop();
    });



}




