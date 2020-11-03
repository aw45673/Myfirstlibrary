var fix_rect,moving_rect,object;

function setup() {
  createCanvas(800,400);
  fix_rect = createSprite(400, 200, 50, 100);
  fix_rect.shapeColor="aquamarine"
  fix_rect.debug=true;
  fix_rect.velocityY=2;
  moving_rect = createSprite(600,200,100,50);
  moving_rect.shapeColor="aquamarine"
  moving_rect.debug=true;
  moving_rect.velocityX=-2;
  object= createSprite(400,350,50,50);
  object.velocityY=-2;
}

function draw() {
  background(0); 

  bounceOff(object,fix_rect)
  
  drawSprites();
}

