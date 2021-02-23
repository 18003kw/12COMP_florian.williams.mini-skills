/*
A program that randomises the process of making a bouncing ball.
*/

// CONSTANTS
// Canvas Width
const canvasWidthMax = 400;
const canvasWidthMin = 0;

// Canvas Height
const canvasHeightMax = 400;
const canvasHeightMin = 0;

// VARIABLES
// ballOne object setup
var ballOne;

// ballTwo object setup
var ballTwo;

// SETUP
function setup() {

  createCanvas(canvasWidthMax, canvasHeightMax);
  frameRate(60);

// ballOne object defined
  ballOne = {
  x: random(0, 400),
  y: random(0, 400),
  diameter: 100,
  speedX: 3,
  speedY: 3,
};

// ballTwo object defined
ballTwo = {
  x: random(0, 400),
  y: random(0, 400),
  diameter: 50,
  speedX: 5,
  speedY: 5,
};

  strokeWeight(0);

}

// DRAW
function draw() {

  // Setting up the background
  background(100, 150, 190);
  
  // ballOne movement
  ballOne.x = ballOne.x + ballOne.speedX;
  ballOne.y = ballOne.y + ballOne.speedY;

  // ballTwo movement
  ballTwo.x =  ballTwo.x + ballTwo.speedX;
  ballTwo.y = ballTwo.y + ballTwo.speedY;

  // Moving ballOne along the x axis.
  if (ballOne.x >= (canvasWidthMax - (ballOne.diameter / 2))) {
    
    console.log("Off the screen +x");
    ballOne.speedX *= -1;
    ballOne.x = (canvasWidthMax - (ballOne.diameter / 2));

  } else if (ballOne.x <= (canvasWidthMin + (ballOne.diameter / 2))) {
    
    console.log("Off the screen -x");
    ballOne.speedX *= -1;
    ballOne.x = (canvasWidthMin + (ballOne.diameter / 2));
  }

  // Moving ballOne along the y axis.
  if (ballOne.y >= (canvasHeightMax - (ballOne.diameter / 2))) {
    
    console.log("Off the screen +y");
    ballOne.speedY *= -1;
    ballOne.y = (canvasHeightMax - (ballOne.diameter / 2));
  
  } else if (ballOne.y <= (canvasHeightMin + (ballOne.diameter / 2))) {
    
    console.log("Off the screen -y");
    ballOne.speedY *= -1;
    ballOne.y = (canvasHeightMin + (ballOne.diameter / 2));
  
  }

  // Moving ballTwo along the x axis.
  if (ballTwo.x >= (canvasWidthMax - (ballTwo.diameter / 2))) {
    
    console.log("Off the screen +x");
    ballTwo.speedX *= -1;
    ballTwo.x = (canvasWidthMax - (ballTwo.diameter / 2));

  } else if (ballTwo.x <= (canvasWidthMin + (ballTwo.diameter / 2))) {
    
    console.log("Off the screen -x");
    ballTwo.speedX *= -1;
    ballTwo.x = (canvasWidthMin + (ballTwo.diameter / 2));
  }

  // Moving ballTwo along the y axis.
  if (ballTwo.y >= (canvasHeightMax - (ballTwo.diameter / 2))) {
    
    console.log("Off the screen +y");
    ballTwo.speedY *= -1;
    ballTwo.y = (canvasHeightMax - (ballTwo.diameter / 2));
  
  } else if (ballTwo.y <= (canvasHeightMin + (ballTwo.diameter / 2))) {
    
    console.log("Off the screen -y");
    ballTwo.speedY *= -1;
    ballTwo.y = (canvasHeightMin + (ballTwo.diameter / 2));
  
  }

// Drawing the circle. It's at the end, because if it is accidentally initialised outside the cavas, it will still automatically return to the canvas.
  ellipse(ballOne.x, ballOne.y, ballOne.diameter, ballOne.diameter);

  ellipse(ballTwo.x, ballTwo.y, ballTwo.diameter, ballTwo.diameter);
}