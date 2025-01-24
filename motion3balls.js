let circleX;
let circleY;
let circleR = 150;
let myArray = [0, 1, 2, 3, 4];
let speedFactor = 0;
let speedFactor1 = 0;
let speedFactor2 = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    buttonR4 = speButton2(40, windowHeight - 40, 4);
    buttonR3 = speButton2(40, windowHeight - 50, 3);
    buttonR2 = speButton2(40, windowHeight - 60, 2);
    buttonR1 = speButton2(40, windowHeight - 70, 1);    
    buttonRStop = speButton2(40, 20, 0);

    buttonr4 = speButton1(windowWidth - 50, windowHeight - 40, 4);
    buttonr3 = speButton1(windowWidth - 50, windowHeight - 50, 3);
    buttonr2 = speButton1(windowWidth - 50, windowHeight - 60, 2);
    buttonr1 = speButton1(windowWidth - 50, windowHeight - 70, 1);
    buttonrStop = speButton1(windowWidth - 50, 20, 0);

    buttonw4 = speButton(windowWidth / 2 - 5, windowHeight - 40, 4);
    buttonw3 = speButton(windowWidth / 2 - 5, windowHeight - 50, 3);
    buttonw2 = speButton(windowWidth / 2 - 5, windowHeight - 60, 2);
    buttonw1 = speButton(windowWidth / 2 - 5, windowHeight - 70, 1);
    buttonwStop = speButton(windowWidth / 2 - 5, 20, 0);
}

function draw() {
    background(0, 30);

    circleX = windowWidth / 2;
    circleY = windowHeight / 2 - 30;

    // Draw moving circles
    movingCirW(255, 255, 255, circleX);
    movingCirR(255, 0, 0, windowWidth - 50);
    movingCirR2(255, 0, 0, 50);
}

function speButton(x, y, z) {
    let button = createButton(' ');
    button.position(x, y);
    button.mousePressed(() => speedFactor = myArray[z]);
    button.style('background-color', 'white');
    button.style('border-radius', '20%');
    button.style('border', '1px solid white');
}

function speButton1(x, y, z) {
    let button = createButton(' ');
    button.position(x, y);
    button.mousePressed(() => speedFactor1 = myArray[z]);
    button.style('background-color', 'red');
    button.style('border-radius', '20%');
    button.style('border', '1px solid red');
}

function speButton2(x, y, z) {
    let button = createButton(' ');
    button.position(x, y);
    button.mousePressed(() => speedFactor2 = myArray[z]);
    button.style('background-color', 'red');
    button.style('border-radius', '20%');
    button.style('border', '1px solid red');
}

function movingCirW(r, g, b, offsetX) {
    let angle = (frameCount * speedFactor) % 360;
    let pointY = circleY + circleR * sin(angle);
    fill(r, g, b);
    circle(offsetX, pointY, 40);
}

function movingCirR(r, g, b, offsetX) {
    let angle = (frameCount * speedFactor1) % 360;
    let pointY = circleY + circleR * sin(angle);
    fill(r, g, b);
    circle(offsetX, pointY, 40);
}

function movingCirR2(r, g, b, offsetX) {
    let angle = (frameCount * speedFactor2) % 360;
    let pointY = circleY + circleR * sin(angle);
    fill(r, g, b);
    circle(offsetX, pointY, 40);
}
