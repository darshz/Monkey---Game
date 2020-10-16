
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   //creating the monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running );
  monkey.scale = 0.1;
  
  //creating the ground 
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(255);
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  //gravity
  monkey.velocityY = monkey.velocityY + 0.8; 

  monkey.collide(ground);
  drawSprites();
  food();
  obstacles();
}
function food(){
  if(frameCount%80===0){
    banana = createSprite(random(0,900),200,20,20);
    banana.addImage("banana.png",bananaImage); 
    banana.velocityX = -6;
    bananaGroup.add(banana);
    banana.scale = 0.1;  
    bananaGroup.setLifetimeEach(80);
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(random(100,300),330,20,20);
    obstacle.addImage("ground.png", obstacleImage);
    obstacle.velocityX = -6;
    obstacleGroup.add(obstacle);
    obstacle.scale = 0.1;
    obstacleGroup.setLifetimeEach(80);
  }
}



