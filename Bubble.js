class Bubble {
  constructor(x, y, rad, col) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(1.5, 3);
    this.ySpeed = random(2, 4);
    this.rad = rad;
    this.col = col;
    this.switched = false;

  }
  move() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }
  display() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
  }
  bounce() {
    if (this.x <= 0 || this.x >= width) {
      this.xSpeed = this.xSpeed * -1;
    }
    if (this.y <= 0 || this.y >= height) {
      this.ySpeed = this.ySpeed * -1;
    }

  }
  grow() {
    if (this.x <= 500 && this.rad < 5) {
      this.rad++;
    }
  }
  shrink() {
    if (this.y <= 200 || this.y >= 400) {
      this.rad--;
    }
  }
  changeColor() {
    if (this.switched) {
      this.col = color(255, 255, 255);
    } else {
      this.col = color(255, 0, 0);
    }
  }

  changeDirection() {
    this.xSpeed = this.xSpeed * -1;
    this.ySpeed = this.ySpeed * -1;
  }
  //the 'intersects' function has a parameter of other.  It compares the distance
  //of 'this' bubble with another bubble where the x/y is being passed in
  intersects(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    if (distance <= this.rad + other.rad) {

      return true;
    } else {
      return false;
    }

  }
}