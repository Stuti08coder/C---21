var fixedRect, movingRect, fixedRect2, fixedRect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect2 = createSprite(600, 550, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
 
  fixedRect2 = createSprite(400, 200, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(500, 300, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
}

function draw() {
  background(0,0,0);  
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(myFirstFunction(movingRect,fixedRect2)){
  movingRect.shapeColor = "red";
  fixedRect2.shapeColor = "red";
 }
else{
  movingRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
}
  
  drawSprites();


}