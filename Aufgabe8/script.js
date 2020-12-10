var Aufgabe8;
(function (Aufgabe8) {
    /* Array mit mehreren Funktionsblöcken*/
    var SOUNDS = [
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
    document.querySelector("#box1").addEventListener("click", function () {
        playSample(SOUNDS[0]);
        record(0);
    });
    document.querySelector("#box2").addEventListener("click", function () {
        playSample(SOUNDS[1]);
        record(1);
    });
    document.querySelector("#box3").addEventListener("click", function () {
        playSample(SOUNDS[2]);
        record(2);
    });
    document.querySelector("#box4").addEventListener("click", function () {
        playSample(SOUNDS[3]);
        record(3);
    });
    document.querySelector("#box5").addEventListener("click", function () {
        playSample(SOUNDS[4]);
        record(4);
    });
    document.querySelector("#box6").addEventListener("click", function () {
        playSample(SOUNDS[5]);
        record(5);
    });
    document.querySelector("#box7").addEventListener("click", function () {
        playSample(SOUNDS[6]);
        record(6);
    });
    document.querySelector("#box8").addEventListener("click", function () {
        playSample(SOUNDS[7]);
        record(7);
    });
    document.querySelector("#box9").addEventListener("click", function () {
        playSample(SOUNDS[8]);
        record(8);
    });
    /*Allgemeine Funktion*/
    function playSample(soundName) {
        soundName.play();
    }
    /*Array für den Beat*/
    var sequence = [4, 5, 8, 8, 4, 8, 4, 4, 5, 8, 5, 5, 8, 4, 5, 8, 4];
    var indexOfSequence = 0;
    /*Flag für Stop und Start*/
    var runFlag = 1;
    /*Funktion für den Beat mit Loop*/
    function playBeat() {
        setInterval(function () {
            if (indexOfSequence < sequence.length && runFlag == 1) {
                playSample(SOUNDS[sequence[indexOfSequence]]);
                indexOfSequence = indexOfSequence + 1;
            }
            else {
                indexOfSequence = 0;
            }
        }, 500);
    }
    /*Aufruf und EventListener Stop*/
    document.querySelector("#stopBtn").addEventListener("click", function () {
        runFlag = 0;
    });
    /*Aufruf und EventListener Start*/
    document.querySelector("#playBtn").addEventListener("click", function () {
        playBeat();
        runFlag = 1;
    });
    /*Play-Button soll bei Klick zu Stop-Button werden*/
    /*Variablen für die Buttons*/
    var play = document.getElementById("playBtn");
    var stop = document.getElementById("stopBtn");
    /*Funktion für das Wechseln der Klassen*/
    function toggleButtons(playButton, stopButton) {
        playButton.classList.add("hideIt");
        stopButton.classList.remove("hideIt");
    }
    /*Aufruf der Funktion für das Wechseln der Klassen*/
    play.addEventListener("click", function () {
        toggleButtons(play, stop);
    });
    stop.addEventListener("click", function () {
        toggleButtons(stop, play);
    });
    /*RecordButton*/
    function record(mynum) {
        sequence.push(mynum);
    }
    document.getElementById("recordBtn").addEventListener("click", function () {
        sequence.push();
    });
    /*DeleteButton*/
    document.getElementById("deleteBtn").addEventListener("click", function () {
        sequence.pop();
    });
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script.js.map