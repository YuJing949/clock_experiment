let circleX;
let circleY;
let circleR = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0, 30);

  circleX = windowWidth / 2;
  circleY = windowHeight / 2 - 50;

  let angle = frameCount % 360;

  // fillGradient('radial', {
  //   from: [windowWidth / 2, windowHeight / 2 - 50, circleR],
  //   to: [windowWidth / 2, windowHeight / 2 - 50, 0],
  //   steps: [
  //     color(50),
  //     color(0)
  //   ]
  // });



  for(let i = 0; i < 25; i ++) {
    fill(25 - i);
    noStroke();
    circle(circleX, circleY, (2 * circleR) - i * 5);
  };
  
  noFill(); 

  stroke(128);
  strokeWeight(3);

  let pointX = circleX + circleR * cos(angle);
  let pointY = circleY + circleR * sin(angle);

  line(circleX, circleY, pointX, pointY);

  noStroke()
  fill(235);
  circle(pointX, pointY, 25);

  // fill(255, 0, 0);
  // circle(pointX, circleY, 10);

  // fill(255, 255, 0);
  // circle(circleX, pointY, 10);
}
