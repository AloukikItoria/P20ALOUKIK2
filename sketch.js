var car,wall;
var speed,weight;

var thickness

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,20,20);
  wall=createSprite(700,200,60,height/2);
  car.velocityX = speed;
  
}

function draw() {
  background("white");
  
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
car.velocityX = 0;
car.x=660;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180)
{
 car.shapeColor=color(255,0,0);
}

if(deformation<180 && deformation>100)

{
 car.shapeColor=color(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}

}
  drawSprites();

}