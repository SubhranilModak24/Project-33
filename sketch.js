var sAnimation1 , sAnimation2, sAnimation3, sAnimationHolder;
const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World

var snow = [];
var rand;

var maxDrops=100;
function preload(){
  Animation1 = loadImage("snow1.jpg")
  boyImg = loadImage("boy.png")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world = engine.world

  boy = createSprite(400, 200, 50, 50);
  boy.addImage(boyImg)
  boy.scale = 0.1;
  ground = createSprite(400,380,800,20)
  ground.visible = false;
  if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        snow.push(new Snow(random(0,800), random(0,400)));
    }

}
  Engine.run(engine);
  
}

function draw() {
  background(Animation1);
  if(keyDown ("UP_ARROW")){
    boy.velocityY=-3;
  }boy.velocityY += 0.8; 
  boy.collide(ground);
  for(var i = 0; i<maxDrops; i++){
    snow[i].showDrop();
    snow[i].updateY()
    
}

  drawSprites();
}