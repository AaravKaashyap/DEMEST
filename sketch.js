var sprite;
function setup(){
  createCanvas(700,500)
  sprite = createSprite(50,50,20,20)  
}
function draw(){
  background("white")
  drawSprites()
  if(keyDown("UP_ARROW")){
    sprite.y = sprite.y -2
  }
  if(keyDown("DOWN_ARROW")){
    sprite.y = sprite.y +2
  }
  if(keyDown("RIGHT_ARROW")){
    sprite.x = sprite.x +2
  }
  if(keyDown("LEFT_ARROW")){
    sprite.x = sprite.x -2
  }
}
