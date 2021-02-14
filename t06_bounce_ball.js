/********************************************************/
//
/********************************************************/
var t06BallX = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 150, 190);

  ellipse(t06BallX, 40, 50, 50);

  t06BallX = t06BallX + 1;
}