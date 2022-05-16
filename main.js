function preload() {
    world_start = loadSound("world_start.wav");
    mario_jump = loadSound("jump.wav");
    mario_coin = loadSound("coin.wav");
    mario_gameover = loadSound("gameover.wav");
    mario_kick = loadSound("kick.wav");
    mario_die = loadSound("mariodie.wav");
    setSprites();
    MarioAnimation();

}

function setup() {
    canvas = createCanvas(1240, 336);
    canvas.parent("gamecanvas")
    instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.size(800, 400);
    video.parent("webcamcanvas");
    poseNet = ml5.poseNet("video", modelloaded);
    poseNet.on("pose", geresults)

}

function modelloaded() {
    console.log(" Model Loaded ");
}

function draw() {
    game();

}

function geresults(resultsarry) {
    if (resultsarry.length > 0) {
        console.log(resultsarry);
        noseX = resultsarry[0].pose.nose.x;
        noseY = resultsarry[0].pose.nose.y;
    }
}