/*
A program that creates a simple bouncing ball.
*/

// CONSTANTS
// Canvas Width
const t07CanvasWidthMax = 400;
const t07CanvasWidthMin = 0;

// Canvas Height
const t07CanvasHeightMax = 400;
const t07CanvasHeightMin = 0;

// VARIABLES
// Defines the ball's intial x position (and any other time it needs a x position set), and it's speed along the x axis
var t07BallX = 100;
var t07BallSpeedX = 20;

// Defines the ball's intial y position (and any other time it needs a y position set), and it's y speed.
var t07BallY = 100;
var t07BallSpeedY = 20;

// Defines the width and height of the ball.
var t07BallWidth = 100;
var t07BallHeight = 100;

// SETUP
function setup() {
  createCanvas(t07CanvasWidthMax, t07CanvasHeightMax);

  frameRate(60);
}

// DRAW
function draw() {
  // Setting up the background
  background(100, 150, 190);

  t07BallX = t07BallX + t07BallSpeedX;

  t07BallY = t07BallY + t07BallSpeedY;

  // Moving the ball along the x axis.
  if (t07BallX >= (t07CanvasWidthMax - (t07BallWidth / 2))) {
    
    console.log("Off the screen +x");

    t07BallSpeedX *= -1;

    t07BallX = (t07CanvasWidthMax - (t07BallWidth / 2));

  } else if (t07BallX <= (t07CanvasWidthMin + (t07BallWidth / 2))) {
    
    console.log("Off the screen -x");
  
    t07BallSpeedX *= -1;

    t07BallX = (t07CanvasWidthMin + (t07BallWidth / 2));
  }

  // Moving the ball along the y axis.
  if (t07BallY >= (t07CanvasHeightMax - (t07BallHeight / 2))) {
    
    console.log("Off the screen +y");

    t07BallSpeedY *= -1;

    t07BallY = (t07CanvasHeightMax - (t07BallHeight / 2));
  
  } else if (t07BallY <= (t07CanvasHeightMin + (t07BallHeight / 2))) {
    
    console.log("Off the screen -y");

    t07BallSpeedY *= -1;

    t07BallY = (t07CanvasHeightMin + (t07BallHeight / 2));
  
  }

// Drawing the circle. It's at the end, because if it is accidentally initialised outside the cavas, it will still automatically return to the canvas.
  ellipse(t07BallX, t07BallY, t07BallWidth, t07BallHeight);

}