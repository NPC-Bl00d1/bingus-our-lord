
var img = "";
var status = "";

function preload(){

img = loadImage('bsd by beloved.jpg');

}

function setup(){

    canvas = createCanvas(640, 420);
    canvas.center();
    
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log("yea");
    status = true;
    objectdetector.detect(img, gotResult);
    
    }
    
    function gotResult(error, results){
    
    if(error){
    
    console.log(error);
    
    }
    
    console.log(results);
    
    }