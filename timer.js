let circleX;
let circleY;
let circleR = 100;
let maxTurns = 5; // Number of turns
let totalFrames = 360 * maxTurns; // Total frames for 5 turns

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0, 30);

  circleX = windowWidth / 2;
  circleY = windowHeight / 2 - 50;

  let angle = min(frameCount, totalFrames) % 360; // Stop after totalFrames

  // Draw concentric circles
  for (let i = 0; i < 25; i++) {
    fill(25 - i);
    noStroke();
    circle(circleX, circleY, (2 * circleR) - i * 5);
  }

  noFill();
  stroke(128);
  strokeWeight(3);

  // Calculate point position
  let pointX = circleX + circleR * cos(angle);
  let pointY = circleY + circleR * sin(angle);

  // Draw line
  line(circleX, circleY, pointX, pointY);

  // Draw rotating circle
  noStroke();
  fill(235);
  circle(pointX, pointY, 25);

  // Stop drawing after 5 turns
  if (frameCount > totalFrames) {
    noLoop(); // Stop the draw loop
  }
}
