// Declare variables
let diameter = 10; // Initial diameter
let slider;
let smallText = [
  "to drink a cup of water",
  "to read a post",
  "to snap-chat with a friend",
  "to wait for a traffic light",
  "to eat a chocolate",
  "to wash hands before a meal",
  "to draw a dog",
];
let mediumText = [
  "for a cup of coffee to cool down",
  "to heat up a meal in microwave",
  "to listen to a long song",
  "to pick up a package downstairs",
  "to read two pages of a book",
  "to make a cup of tea",
  "to wait for a bus",
  "to play with a cat for a while",
  "to wait for a friend to arrive",
];
let largeText = [
  "for a midday nap",
  "to draw a portrait of someone in the park",
  "to walk to the nearest convenient store",
  "to queue and buy breakfast",
  "to do a simple make up",
  "to take a shower",
  "to do a quick yoga",
  "to tidy up the desk after a deadline",
];

let displayText = "";
let previousRange = "";
let textColor;
let timerButton;
let timerActive = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create a slider control
  slider = createSlider(1, 60, diameter, 0.1);
  slider.position(width / 2 - 100, height - 50);
  slider.style('width', '200px');

  // Initialize text color
  textColor = color(random(255), random(255), random(255));

  // Create the timer button
  timerButton = createButton('Timer');
  timerButton.position(width / 2 - 30, 10);
  timerButton.style('background-color', 'white');
  timerButton.style('border', '1px solid black');
  timerButton.style('padding', '10px');
  timerButton.mousePressed(() => {
    timerActive = true;
  });
}

function draw() {
  if (diameter === 1) {
    background(144, 238, 144); // Light green background when diameter is 1
  } else {
    background(255, 255, 185); // Light yellow background otherwise
  }

  // Handle timer functionality
  if (timerActive && diameter > 1) {
    diameter -= 0.005; // Decrease diameter slowly
    slider.value(diameter); // Update the slider
    if (diameter <= 1) {
      diameter = 1;
      timerActive = false; // Stop the timer when it reaches 1
    }
  } else {
    diameter = slider.value(); // Sync diameter with slider when timer is inactive
  }

  // Determine the current range
  let currentRange = "";
  if (diameter >= 1 && diameter <= 5) {
    currentRange = "small";
  } else if (diameter > 5 && diameter <= 15) {
    currentRange = "medium";
  } else if (diameter > 15 && diameter <= 25) {
    currentRange = "large";
  } else if (diameter > 25 && diameter <= 35) {
    currentRange = "extraLarge";
  } else if (diameter > 35 && diameter <= 40) {
    currentRange = "largeSmallCombo";
  } else if (diameter > 40 && diameter <= 50) {
    currentRange = "largeMediumCombo";
  } else if (diameter > 50 && diameter <= 60) {
    currentRange = "extraextraLarge";
  }

  // Update display text and text color only if the range changes
  if (currentRange !== previousRange) {
    if (currentRange === "small") {
      displayText = random(smallText);
    } else if (currentRange === "medium") {
      displayText = random(mediumText);
    } else if (currentRange === "large") {
      displayText = random(largeText);
    } else if (currentRange === "extraLarge") {
      let mediumChoice1 = random(mediumText);
      let mediumChoice2 = random(mediumText);
      displayText = `${mediumChoice1} and ${mediumChoice2}`;
    } else if (currentRange === "largeSmallCombo") {
      let largeChoice = random(largeText);
      let smallChoice = random(smallText);
      displayText = `${largeChoice} and ${smallChoice}`;
    } else if (currentRange === "largeMediumCombo") {
      let largeChoice = random(largeText);
      let mediumChoice = random(mediumText);
      displayText = `${largeChoice} and ${mediumChoice}`;
    } else if (currentRange === "extraextraLarge") {
      let largeChoice1 = random(largeText);
      let largeChoice2 = random(largeText);
      displayText = `${largeChoice1} and ${largeChoice2}`;
    }
    textColor = color(random(255), random(255), random(255)); // Change text color
    previousRange = currentRange;
  }

  // Draw the circle
  if (timerActive) {
    fill(255, 182, 193); // Light pink circle when timer is active
  } else {
    fill(255); // White circle
  }
  noStroke();
  ellipse(width / 2, height / 2 - 20, diameter * 10); // Scale diameter for visibility

  // Display text
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(textColor);
  text(displayText, width / 2, height / 2 + 100);
}
