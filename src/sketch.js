var PI = Math.PI;
var angle = 0;
var slider;
var button;
var weight = 10;
var count = 0;

function setup() {
  createCanvas(1700, 800);
  // slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  noLoop();

  slider = document.getElementById("slider");
  slider.value = 6;
  slider.oninput = async function() {
    // console.log('changed');
    count = 0;
    await redraw();
  }
}

async function draw() {
  count = 0;
  background(255);
  angle = slider.value;
  var len = 200;
  stroke(0);
  strokeWeight(weight);
  translate(850, height);
  branch(200, weight);
  document.getElementById("count").innerHTML = count;
    console.log(count);
}

function branch(len, weight) {
  count++;
  weight = weight * 0.7;
  strokeWeight(weight);
  line(0, 0, 0, -len);
  translate(0, -len);
  // angle = angle * Math.random();

  if (len > 5) {
    push();
    rotate(angle - (Math.random()));
    branch(len * 0.7, weight);
    pop();
    push();
    rotate(-angle + (Math.random()));
    branch(len * 0.7, weight);
    pop();
    push();
    rotate(Math.random() -0.5);
    branch(len * 0.7, weight);
    pop();
  }

  return;

  // line(0,0,0, -len*0.7);
}
