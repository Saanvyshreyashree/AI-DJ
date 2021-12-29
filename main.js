Song="";
lw_X=0;
lw_Y=0;

rw_X=0;
rw_Y=0;

function preload()
{
    Song=loadSound("music.mp3")
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       lw_X=results[0].pose.leftWrist.x;
       lw_Y=results[0].pose.leftWrist.y;
    
       console.log( " leftWrist X="+ lw_X + " leftWrist Y=" + lw_Y);


       rw_X=results[0].pose.rightWrist.x;
       rw_Y=results[0].pose.rightWrist.y;
    
       console.log( " RighttWrist X="+ rw_X + " RighttWrist Y=" + rw_Y);
   }
}

function draw()
{
    image(video,0,0,600,500);
    fill("#006400");
    stroke("#006400");
    
    circle(lw_X,lw_Y,20);
    ln=Number(lw_Y);
    r=floor(ln);
    volume=r/500;
    document.getElementById("volume").innerHTML="volume= "+ volume;
    song.setVolume(volume);                                
}

function play()
{
    Song.play();
    song.setVolume(1);
    song.rate(1)
}