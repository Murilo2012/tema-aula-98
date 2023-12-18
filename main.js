var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox= document.getElementById("textobox")
function start() {
    textbox.innerHTML=""
}
