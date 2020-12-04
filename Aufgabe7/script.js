/* Array mit mehreren Funktionsblöcken*/
var Sounds = [
    new Audio('music/A.mp3'),
    new Audio('music/C.mp3'),
    new Audio('music/F.mp3'),
    new Audio('music/G.mp3'),
    new Audio('music/hihat.mp3'),
    new Audio('music/kick.mp3'),
    new Audio('music/laugh-1.mp3'),
    new Audio('music/laugh-2.mp3'),
    new Audio('music/snare.mp3'),
];
/* Erster Aufgabenteil*/
/* Funktion*/
function playSample(soundName) {
    soundName.play();
}
/*Aufruf der verschiedenen Variablen und Element Listener*/
document.querySelector('#box1').addEventListener('click', function () {
    playSample(Sounds[0]);
});
document.querySelector('#box2').addEventListener('click', function () {
    playSample(Sounds[1]);
});
document.querySelector('#box3').addEventListener('click', function () {
    playSample(Sounds[2]);
});
document.querySelector('#box4').addEventListener('click', function () {
    playSample(Sounds[3]);
});
document.querySelector('#box5').addEventListener('click', function () {
    playSample(Sounds[4]);
});
document.querySelector('#box6').addEventListener('click', function () {
    playSample(Sounds[5]);
});
document.querySelector('#box7').addEventListener('click', function () {
    playSample(Sounds[6]);
});
document.querySelector('#box8').addEventListener('click', function () {
    playSample(Sounds[7]);
});
document.querySelector('#box9').addEventListener('click', function () {
    playSample(Sounds[8]);
});
/*Zweiter Aufgabenteil*/
/*Funktion für den Beat*/
function playBeat() {
    setInterval(function () {
        playSample(Sounds[5]);
        playSample(Sounds[8]);
        playSample(Sounds[4]);
    }, 500);
}
/*Aufruf und EventListener*/
document.querySelector('#imgplay').addEventListener('click', function () {
    playBeat();
});
//# sourceMappingURL=script.js.map