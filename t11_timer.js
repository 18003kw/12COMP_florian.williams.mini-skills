colour = "#75E298";

upTime = 30000;
downTime = 30000;

function setup() {
  createCanvas(200, 200);

  setTimeout(bgColourPurple, upTime);
}

function draw() {
  background(colour);
};

function bgColourPurple() {
  colour = "#9A75E2";
}