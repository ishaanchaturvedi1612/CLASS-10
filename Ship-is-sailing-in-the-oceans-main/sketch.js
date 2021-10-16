
var ship, ship_sailing, edges;
var sea,sea_image;
function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_image = loadImage("sea.png")
}

function setup(){
  createCanvas(1300,600);
 
  sea = createSprite(50,50,50,20);
sea.addImage("S1",sea_image);
sea.velocityX = -6;

  ship = createSprite(100,150,50,50);
  ship.addAnimation("sailing", ship_sailing);
  edges = createEdgeSprites();
  
  
  ship.scale = 0.2;  
}



function draw() {
  background(220);
  
  
  ship.velocityX=1;
  
  
  if (sea.x<0){
sea.x=sea.width/2;

  }
ship.bounceOff(edges)
 
  drawSprites();
}