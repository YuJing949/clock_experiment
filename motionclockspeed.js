let circleX;
let circleY;
let circleR = 100;
let myArray = [1, 2, 3, 4, 5];
let speedFactor = 1; // Default speed factor

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // Create buttons and set their positions
  let button1 = createButton(' ');
  button1.position(50, 80);
  button1.mousePressed(() => speedFactor = myArray[2]);

  let button2 = createButton(' ');
  button2.position(50, 120);
  button2.mousePressed(() => speedFactor = myArray[0]);

  let button3 = createButton(' ');
  button3.position(50, 160);
  button3.mousePressed(() => speedFactor = myArray[1]);

  let button4 = createButton(' ');
  button4.position(50, 200);
  button4.mousePressed(() => speedFactor = myArray[4]);

  let button5 = createButton(' ');
  button5.position(50, 240);
  button5.mousePressed(() => speedFactor = myArray[3]);
}

function draw() {
  background(0, 30);

  circleX = windowWidth / 2;
  circleY = windowHeight / 2 - 50;

  let angle = (frameCount * speedFactor) % 360;

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

  //line(circleX, circleY, pointX, pointY);

  noStroke();
  fill(235);
  circle(pointX, pointY, 25);
}
