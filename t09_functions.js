/*
A program that adds basic functions to making a bouncing ball.
*/

// How do make it not go off edge when speed up framerate down?

// ballOne defined
var ballOne = {
  x : 0,
  y : 0,
  diameter : 100,
  speedX : random(-10, 10),
  speedY : random(-10, 10),
};

// ballTwo object defined
var ballTwo = {
  x : 0,
  y : 0,
  diameter : 50,
  speedX : 5,
  speedY : 5,

  drawBall : function() {
    ellipse(this.x, this.y, this.diameter);
  },

  moving : function() {
    this.x += this.speedX;
    this.y += this.speedY;
  },

  xBounce : function() {
    if (this.x >= (width - (this.diameter / 2)) || this.x <= (this.diameter / 2)) {
      this.speedX *= -1;
    }
  },

  yBounce : function() {
    if(this.y >= (height - (this.diameter / 2)) || this.y <= (this.diameter / 2)) {
      this.speedY *= -1;
    }
  },
};

// SETUP
function setup() {

  createCanvas(400, 400);
  frameRate(60);
  strokeWeight(0);

  ballOne.x = random(50, 350);
  ballOne.y = random(50, 350);

  ballTwo.x = random(50, 350);
  ballTwo.y = random(50, 350);


}

// DRAW
function draw() {

  // Setting up the background
  background(100, 150, 190);

  // ballOne
  ballOneMove();

  ballOne.speedX = ballOneBounce(ballOne.x, (ballOne.diameter / 2), ballOne.speedX);
  ballOne.speedY = ballOneBounce(ballOne.y, (ballOne.diameter / 2), ballOne.speedY);

  ellipse(ballOne.x, ballOne.y, ballOne.diameter);

  // ballTwo
  ballTwo.moving();

  ballTwo.xBounce();
  ballTwo.yBounce();
  
  ballTwo.drawBall();
}

function ballOneMove() {
  ballOne.x += ballOne.speedX;
  ballOne.y += ballOne.speedY;
}

function ballOneBounce(position, radius, speed) {
  if (position >= (width - radius) || position <= radius) {
    speed *= -1;
    }
  return(speed);
}