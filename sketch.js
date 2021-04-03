var PLAY=1;
var END=0;
var WIN=2;
var gameState = PLAY;
var runner;
var food, foodGroup;
var things, thingsGroup;
var ground;
var score, badscore;
var fries;
var almond, apple, asparagus, avacado, banana, blueberries;
var shopper;
var burger, candy, corndog, hotdog, pizza, salad, soda;
var BGI;
var box1;
var background;

function preload(){
  BGI=loadImage("shelves2.jpg");
  shopper=loadAnimation("Shopper1.png", "Shopper2.png", "Shopper3.png");
  fries=loadImage("Fries.png");
  almond=loadImage("Almonds.png");
  apple=loadImage("Apple.png");
  asparagus=loadImage("Asparagus.png");
  avacado=loadImage("Avacado.png");
  banana=loadImage("Banana.png");
  blueberries=loadImage("Blueberries.png");
  burger=loadImage("Burger.png");
  candy=loadImage("Candy.png");
  corndog=loadImage("CornDog.png");
  hotdog=loadImage("HotDog.png");
  pizza=loadImage("Pizza.png");
  salad=loadImage("Salad.png");
  soda=loadImage("Soda.png");
}

function setup() {
  createCanvas(400,400);
  background = createSprite(200,200,400,400);
  background.addImage("background", BGI);
  background.x = background.width /4;
  background.scale = .5;
  
  runner=createSprite(80,330,60,80);
  runner.addAnimation("shopping",shopper);
  runner.setCollider("rectangle",0,145,runner.width,runner.height/2);
  //runner.debug=true;
  
  
  //runner.debug = true;
  runner.scale=0.2;
  foodGroup= createGroup();
  thingsGroup= createGroup();
  score=0;
  badscore=0;
  
  
  ground=createSprite(200,390,400,35);
}

function draw() {
//background(BGI);
  //background.scale=2;
  //if (background.y > 500){
 //   background.y = background.height/1.5;
//  }
  
// moving ground
  //background.velocityx = -4;
  
  runner.velocityY = runner.velocityY + 0.8;
  runner.collide(ground);

  if(gameState === PLAY){
    
    background.velocityX=-(4+3*score/100);
    //background.velocityX=background.velocityX;
    if(background.x<0){
      background.x=background.width/4;
  
    }

    
    
    
if(keyDown("space")&& runner.y >= 100) {
       //jumpSound.play(); 
       runner.velocityY = -12;
}

  
F();
T();
  
  //textSize(20);
  //fill(0);
  //text("Healthy food Score : "+score,200,50);
  //text("Junk food Score : "+badscore, 5,50);
  //box1=createSprite(200,100,400,150);
  
  if(runner.isTouching(foodGroup)){
        //bananaSound.play();
        food.lifetime=0;
        score=score+1; 
     }
    if(runner.isTouching(thingsGroup)){
        //bananaSound.play();
        things.lifetime=0;
        badscore=badscore+1; 
    }
    if(badscore===10){
      gameState=END;
      ground.velocityX = 0;
    }
    
    if(score===10){
    gameState=WIN;
    ground.velocityX = 0;
  }
  }  
  drawSprites();
  
  if(gameState===END){
    textSize(40);
    fill(0);
    text("Game Over",100,150);
    textSize(30);
    text("Press 'p' to try again.",50,250);
    thingsGroup.setLifetimeEach(0);
    foodGroup.setLifetimeEach(0);
    background.velocityX = 0;
     
    thingsGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    if(keyDown("p")){
      reset();
    }
  }
  
  if(gameState===WIN){
    textSize(40);
    fill(0);
    text("You Win!",100,150);
    textSize(30);
    text("Press 'p' to try again.",50,250);
    thingsGroup.setLifetimeEach(0);
    foodGroup.setLifetimeEach(0);
    background.velocityX = 0; 
    thingsGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    
    if(keyDown("p")){
      reset();
    }
  }
  function reset(){
  gameState=PLAY;
  thingsGroup.destroyEach();
  foodGroup.destroyEach();
  score=0;
  badscore=0;
}
  
  
  textSize(20);
  fill(0);
  text("Healthy food Score : "+score,200,50);
  text("Junk food Score : "+badscore, 5,50);
  
  }
  


 
 function F(){
   if(World.frameCount% 200===0){
    food=createSprite(400,400,20,20);
     var Thex=Math.round(random(150,350));
     food.y=Thex;
     var theV=(random(-4,-7));
    food.velocityX =theV// -(4 + 3* score/5)
    food.lifetime=300;
     var rand2 = Math.round(random(1,6));
    switch(rand2) {
      case 1: food.addImage(almond);
              break;
      case 2: food.addImage(apple);
              break;
      case 3: food.addImage(asparagus);
              break;
      case 4: food.addImage(avacado);
              break;
      case 5: food.addImage(banana);
              break;
      case 6: food.addImage(blueberries);
              break;
      default: break;
    }
     food.scale=0.5;
    foodGroup.add(food);
    }
  
 } 

function T(){
  if(World.frameCount% 250===0){
    things=createSprite(400,400,40,40);
    var rand = Math.round(random(1,7));
    switch(rand) {
      case 1: things.addImage(fries);
              break;
      case 2: things.addImage(burger);
              break;
     case 3: things.addImage(candy);
              break;
      case 4: things.addImage(pizza);
              break;
      case 5: things.addImage(soda);
              break;
      case 6: things.addImage(hotdog);
              break;
      case 7: things.addImage(corndog)
      default: break;
    }
    things.scale=0.5;
    var Thex2=Math.round(random(150,350));
     things.y=Thex2;
    var TheV2=(random(-4,-7));
    things.velocityX = TheV2;
    things.lifetime=500;
    thingsGroup.add(things);

    }
  
}

  