song = " ";
leftwristY = " ";
leftwristX = " ";
rightwristY = " ";
rightwristX = " ";

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Model Is Loaded!! :)");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("X coordinates of left Wrist = " + leftwristX + ", Y coordinates of left Wrist = " + leftwristY);
        console.log("X coordinates of right Wrist = " + rightwristX + ", Y coordinates of right Wrist = " + rightwristY);
    }
}