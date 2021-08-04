var runner, running, runner_collided;
var ground, invisibleGround, groundImage,invisibleGround2;

function preload(){
  //pre-load images
    running = loadAnimation("Runner-1.png","Runner-2.png");

    runner_collided = loadImage("power.png");

    groundImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
    
  invisibleGround=createSprite(400,400,20,400);
  invisibleGround.visible=false;
  invisibleGround2=createSprite(0,400,40,400);
  invisibleGround2.visible=false;
   
  ground = createSprite(200,200);
  ground.addImage(groundImage);
  ground.velocityY=4;
  ground.scale=1.2;
        
  runner = createSprite(300,360,20,50);
  runner.addAnimation("running", running);
  runner.scale = 0.05;
}

function draw() {
  background(0);

  runner.x=mouseX;

  runner.collide(invisibleGround2);
  runner.collide(invisibleGround);

if(ground.y>400){
  ground.y=height/2;
}

  drawSprites();

}
