let backgroundStopChange = document.getElementById("stopButton");
let backgroundReadyChange = document.getElementById("readyButton");
let backgroundGoChange = document.getElementById("goButton");
let backgroundStopContainer = document.getElementById("stopLight");
let backgroundReadyContainer = document.getElementById("readyLight");
let backgroundGoContainer = document.getElementById("goLight");

function onStop() {
    backgroundStopChange.style.backgroundColor = "#cf1124";
    backgroundReadyChange.style.backgroundColor = "#1f1d41";
    backgroundGoChange.style.backgroundColor = "#1f1d41";
    backgroundStopContainer.style.backgroundColor = "#cf1124";
    backgroundReadyContainer.style.backgroundColor = "#4b5069";
    backgroundGoContainer.style.backgroundColor = "#4b5069";
}

function onReady() {
    backgroundStopChange.style.backgroundColor = "#1f1d41";
    backgroundReadyChange.style.backgroundColor = "#f7c948";
    backgroundGoChange.style.backgroundColor = "#1f1d41";
    backgroundStopContainer.style.backgroundColor = "#4b5069";
    backgroundReadyContainer.style.backgroundColor = "#f7c948";
    backgroundGoContainer.style.backgroundColor = "#4b5069";
}

function onGo() {
    backgroundStopChange.style.backgroundColor = "#1f1d41";
    backgroundReadyChange.style.backgroundColor = "#1f1d41";
    backgroundGoChange.style.backgroundColor = "#199473";
    backgroundStopContainer.style.backgroundColor = "#4b5069";
    backgroundReadyContainer.style.backgroundColor = "#4b5069";
    backgroundGoContainer.style.backgroundColor = "#199473";
}