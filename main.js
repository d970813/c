x = 0;
y = 0;

draw_apple = "";

var speak_data = "";

var to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
to_number = Number(content);
if(Number.isInteger(to_number))
draw_apple="set";
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}


function preload() {
  loadimage("apple")
}
function createCanvas(){
  screen_height-150.
}



function canvasposition() {
  width = "0-150";
  
}
