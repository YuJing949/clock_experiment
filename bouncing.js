let circles = []; // Array to store circles
let slider;           // Slider to control speed

function setup() {
  createCanvas(800, 800);

  // Initialize 15 circles with random positions and velocities
  for (let i = 0; i < 30; i++) {
    let [currentX, currentY] = getRandomBorderPosition();
    let [targetX, targetY] = getRandomBorderPosition();
    let angle = atan2(targetY - currentY, targetX - currentX);
    let speed = 2;
    let dx = cos(angle) * speed;
    let dy = sin(angle) * speed;

    circles.push({ currentX, currentY, targetX, targetY, dx, dy, speed });
  }

  // Create slider for speed control
  slider = createSlider(5, 15, 2); // Min value 1, max value 10, default value 2
  slider.position(10, 10);
  slider.style('width', '100px');
}

function draw() {
  background(0, 80);

  // Update speed based on slider value
  let sliderSpeed = slider.value();

  for (let circle of circles) {
    let scaleFactor = sliderSpeed / circle.speed;
    circle.speed = sliderSpeed;
    circle.dx *= scaleFactor;
    circle.dy *= scaleFactor;

    // Update the circle's position
    circle.currentX += circle.dx;
    circle.currentY += circle.dy;

    // Check if the circle reaches the target position (bounce effect)
    if (dist(circle.currentX, circle.currentY, circle.targetX, circle.targetY) < circle.speed) {
      [circle.targetX, circle.targetY] = getRandomBorderPosition();
      let angle = atan2(circle.targetY - circle.currentY, circle.targetX - circle.currentX);
      circle.dx = cos(angle) * circle.speed;
      circle.dy = sin(angle) * circle.speed;
    }

    // Draw the circle
    fill(255,40);
    stroke(255);
    ellipse(circle.currentX, circle.currentY, 30, 30);
  }

  // Draw slider label
  fill(0);
  textSize(12);
  text(`Speed: ${sliderSpeed}`, slider.x + slider.width + 10, slider.y + 10);
}

function getRandomBorderPosition() {
  let edge = floor(random(4));
  if (edge === 0) return [random(width), 0]; // Top edge
  if (edge === 1) return [width, random(height)]; // Right edge
  if (edge === 2) return [random(width), height]; // Bottom edge
  return [0, random(height)]; // Left edge
}
