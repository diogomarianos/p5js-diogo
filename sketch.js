function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  stroke("black");
  fill("blue");
  
  if(mouseIsPressed){
    circle(mouseX, mouseY, 50, 50);
  }
}
