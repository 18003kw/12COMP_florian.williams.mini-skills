/********************************************************/
//
/********************************************************/
var t05BallX = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 150, 190);

  ellipse(t05BallX, 40, 50, 50);

  t05BallX = t05BallX + 1;
}