let circles = [];
let slider;
let timerButton;
let countdown = 0;
let timerActive = false;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 60; i++) {
        let [currentX, currentY] = getRandomBorderPosition();
        let [targetX, targetY] = getRandomBorderPosition();
        let angle = atan2(targetY - currentY, targetX - currentX);
        let speed = 2;
        let dx = cos(angle) * speed;
        let dy = sin(angle) * speed; 

        circles.push({ currentX, currentY, targetX, targetY, dx, dy, speed });
    }

    slider = createSlider(2, 8, 2);
    slider.position(10, 10);
    slider.style('width', '100px');

    timerButton = createButton('Start');
    timerButton.position(10, 40);
    timerButton.mousePressed(startTimer);
}

function draw() {
    if (timerActive && countdown > 0) {
        background(0, 50);
        stroke(255);
        fill(255,50);
        countdown -= deltaTime / 1000;
        if (countdown <= 0) {
            countdown = 0;
            timerActive = false;
        }
    } else {
        background(220, 90);
        noStroke();
        fill(100, 50, 255);
    }

    let sliderSpeed = slider.value();

    for (let circle of circles) {
        let scaleFactor = sliderSpeed / circle.speed;
        circle.speed = sliderSpeed;
        circle.dx *= scaleFactor;
        circle.dy *= scaleFactor;


        circle.currentX += circle.dx;
        circle.currentY += circle.dy;


        if (dist(mouseX, mouseY, circle.currentX, circle.currentY) < 20) {
            let angle = atan2(-circle.dy, -circle.dx);
            circle.dx = cos(angle) * circle.speed;
            circle.dy = sin(angle) * circle.speed;
            [circle.targetX, circle.targetY] = [circle.currentX + circle.dx * 50, circle.currentY + circle.dy * 50];
        }

        if (dist(circle.currentX, circle.currentY, circle.targetX, circle.targetY) < circle.speed) {
            [circle.targetX, circle.targetY] = getRandomBorderPosition();
            let angle = atan2(circle.targetY - circle.currentY, circle.targetX - circle.currentX);
            circle.dx = cos(angle) * circle.speed;
            circle.dy = sin(angle) * circle.speed;
        }

        ellipse(circle.currentX, circle.currentY, 40, 40);
    }

    fill(timerActive && countdown > 0 ? 255 : 0);
    textSize(12);
    text(`Speed: ${sliderSpeed}`, slider.x + slider.width + 10, slider.y + 10);
}

function getRandomBorderPosition() {
    let edge = floor(random(4));
    if (edge === 0) return [random(width), 0];
    if (edge === 1) return [width, random(height)];
    if (edge === 2) return [random(width), height];
    return [0, random(height)];
}

function startTimer() {
    countdown = 60;
    timerActive = true;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
