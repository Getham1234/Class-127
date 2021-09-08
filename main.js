amazing_grace = ""
oh_when_the_saints = ""
function preload(){
    amazing_grace = loadSound("2a Amazing Grace (Demo).mp3");
    oh_when_the_saints = loadSound("3a Oh When the Saints (Demo).mp3");
}

function setup(){
    canvas = createCanvas(600, 500)
    canvas.position(430, 250)
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video, 0, 0, 600, 500);
}