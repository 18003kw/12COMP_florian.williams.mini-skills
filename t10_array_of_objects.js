/*
A program that adds arrays to making a bouncing ball.
*/
// Constants

// Variables
// ball object defined
var ball = [];

// SETUP
function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  for(i = 0; i < 150; i++) {
    ball[i] = {
      diameter : 0,
      minDiameter : 1,
      maxDiameter : 300,
      
      r : 0,
      g : 0,
      b : 0,
      
      x : 0,
      y : 0,
  
      speedX : 5,
      speedY : 5,
      speedRange : 10,
      
      randomise : function() {
        this.diameter = round(random(this.minDiameter, this.maxDiameter));

        this.x = round(random((this.diameter/2), width-(this.diameter/2)));
        this.y = round(random((this.diameter/2), height-(this.diameter/2)));

        this.speedX = round(random(-this.speedRange, this.speedRange));
        this.speedY = round(random(-this.speedRange, this.speedRange));

        this.r = round(random(this.diameter / 2, this.diameter));
        this.g = round(random(this.diameter / 2, this.diameter));
        this.b = round(random(this.diameter / 2, this.diameter));
        
      },
      
      drawBall : function() {
        fill(this.r, this.g, this.b);

        stroke(0, 0, 0);
        strokeWeight(0);

        ellipse(this.x, this.y, this.diameter);
        
      },
      
      moving : function() {
        this.x += this.speedX;
        this.y += this.speedY;
      },
      
      xBounce : function() {
        if (this.x >= width - (this.diameter / 2)) {
          this.speedX *= -1;
          
          this.x = width - (this.diameter / 2);
        }
        
        if (this.x <= this.diameter / 2) {
          this.speedX *= -1;
          
          this.x = this.diameter / 2;
        }
      },
      
      yBounce : function() {
        if (this.y >= height - (this.diameter / 2)) {
          
          this.speedY *= -1;
          this.y = height - (this.diameter / 2);
        }
      
        if (this.y <= this.diameter / 2) {
          
          this.speedY *= -1;
          this.y = this.diameter / 2;
        }
      },
    };
    ball[i].randomise();
  }
}

// DRAW
function draw() {

  // Setting up the background
  background(0, 0, 0);

  // Ball
  for(i = 0; i < ball.length; i++) {
    ball[i].xBounce();
    ball[i].yBounce();

    ball[i].moving();

    ball[i].drawBall();
  }
}