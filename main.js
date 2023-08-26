song = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function preload ()
{
    song = loadSound("music.mp3");
    
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    pn = poseNet(video,modelLoaded)
    pn.on('pose',gotPoses)
}
function modelLoaded()
{
    console.log('model has been loaded')
}
function gotPoses(results)
{
    console.log(results)
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
}
function draw()
{
    image(video,0,0,600,500);
}
function pbtn()
{
    song.play();
    song.setVolume(1.0);
    song.rate(1.0);
}