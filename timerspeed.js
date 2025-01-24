let circleX;
let circleY;
let circleR = 100;
let myArray = [1, 2, 3, 4, 5];
let speedFactor = 1;
let maxTurns = 15;
let totalFrames = 360 * maxTurns;
let currentFrame = 0; // Custom frame counter

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  

  let button1 = createButton(' ');
  button1.position(50, 80);
  button1.mousePressed(() => {
    speedFactor = myArray[2]
    currentFrame = 0;
    loop();
  });

  let button2 = createButton(' ');
  button2.position(50, 120);
  button2.mousePressed(() => {
    speedFactor = myArray[0];
    currentFrame = 0;
    loop();
  });

  let button3 = createButton(' ');
  button3.position(50, 160);
  button3.mousePressed(() => {
    speedFactor = myArray[1];
    currentFrame = 0;
    loop();
  });

  let button4 = createButton(' ');
  button4.position(50, 200);
  button4.mousePressed(() => {
    speedFactor = myArray[4];
    currentFrame = 0;
    loop();
  });

  let button5 = createButton(' ');
  button5.position(50, 240);
  button5.mousePressed(() => {
    speedFactor = myArray[3];
    currentFrame = 0;
    loop();
  });
}

function draw() {
  background(0, 30);
  

  circleX = windowWidth / 2;
  circleY = windowHeight / 2 - 50;

  // Increment custom frame counter
  currentFrame++;

  // Calculate angle based on custom frame counter
  let angle = min(currentFrame * speedFactor, totalFrames) % 360;

  for (let i = 0; i < 30; i++) {
    fill(30 - i);
    noStroke();
    circle(circleX, circleY, (2 * circleR) - i * 5);
  }

  noFill();

  stroke(128);
  strokeWeight(3);

  let pointX = circleX + circleR * cos(angle);
  let pointY = circleY + circleR * sin(angle);

  noStroke();
  fill(235);
  circle(pointX, pointY, 25);

  if (currentFrame * speedFactor > totalFrames) {
    noLoop();
  }
}
