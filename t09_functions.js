/*
A program that adds basic functions to making a bouncing ball.
*/

// CONSTANTS
// Canvas Width
const canvasWidthMax = 400;
const canvasWidthMin = 0;

// Canvas Height
const canvasHeightMax = 400;
const canvasHeightMin = 0;

// SETUP
function setup() {

  createCanvas(canvasWidthMax, canvasHeightMax);
  frameRate(60);
  strokeWeight(0);

  // ballOne object defined
  ballOne = {
  x: random(0, 400),
  y: random(0, 400),
  };

  // ballTwo object defined
  ballTwo = {
    x: random(0, 400),
    y: random(0,400),
  };
}

// DRAW
function draw() {

  // Setting up the background
  background(100, 150, 190);

  // Calling the drawBall function 1st time.
  drawBall(ballOne.x, ballOne.y, 3, 3, 100);

  // Make a different fucntion to set up the initial position

}

function drawBall(x, y, speedX, speedY, diameter) {

  // Ball movement
  x = x + speedX;
  y = y + speedY;

  // Moving the ball along the x axis.
  if (x >= (canvasWidthMax - (diameter / 2))) {
    
    console.log("Off the screen +x");
    speedX *= -1;
    x = (canvasWidthMax - (diameter / 2));

  } else if (x <= (canvasWidthMin + (diameter / 2))) {
    
    console.log("Off the screen -x");
    speedX *= -1;
    x = (canvasWidthMin + (diameter / 2));

  }

  // Moving the ball along the y axis.
  if (y >= (canvasHeightMax - (diameter / 2))) {
    
    console.log("Off the screen +y");
    speedY *= -1;
    y = (canvasHeightMax - (diameter / 2));
  
  } else if (y <= (canvasHeightMin + (diameter / 2))) {
    
    console.log("Off the screen -y");
    speedY *= -1;
    y = (canvasHeightMin + (diameter / 2));
  
  }

  // Drawing the circle. It's at the end, because if it is accidentally initialised outside the cavas, it will still automatically return to the canvas.
  ellipse(x, y, diameter, diameter);
}