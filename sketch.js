var movingrect, fixrect;

function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200, 200, 70, 50);
}

function draw() {
  background(0,0,0);  
  movingrect.x =  mouseX;
  movingrect.y =  mouseY;
  if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2 && fixrect.x- movingrect.x<movingrect.width/2+fixrect.width/2
    && movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2 && fixrect.y- movingrect.y<movingrect.height/2+fixrect.height/2 ){
    movingrect.shapeColor = "red";
    fixrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "white";
    fixrect.shapeColor = "white";
  }
  drawSprites();
}