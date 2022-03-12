song_burst="";
song_turbo="";
leftWristX ="";
leftWristY ="";
rightWristX ="";
rightWristY ="";

function preload() {
    song_turbo= loadSound("turbo");
    song_burst= loadSound("burst")
}
function setup() {
    canvas= createCanvas(600, 500);
    canvas.position(650, 300);

    video= createCapture(VIDEO); 
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;


        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
  
    }
}
function modelLoaded(){
    console.log("PoseNet is initialized!");
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function play(){
    song.play();
    song.setVolume(0.3);
    song.rate(1);  
    }