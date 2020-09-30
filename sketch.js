let bubbles = [];

let col = {
  r: 255,
  g:0,
  b:0,
}

let canvas = document.getElementById('canvas');

canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 15; i++) {
    bubbles[i] = new Bubble(random(width), random(height), 35, color(150, 100, 255, 200));
  }

}

function draw() {
  background(255);
  //outer loop sets rules for initial balls
   fill(col.r, col.g, col.b);
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
    bubbles[i].bounce();
    //inner loop compares the balls to each other.  within the if statement
    //i != j means, not to compare an object to itself
    for (let j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].switched = !bubbles[i].switched;
        //bubbles[i].changeDirection();
        // bubbles[i].changeColor();
       // bubbles[i].shrink();
        //bubbles[i].grow();
      }
    }

  }
}