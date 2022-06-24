// Get time the page was loaded.
var start = new Date().getTime();
// Get time when shape was clicked.
var end = new Date().getTime();
// Work out how long it took to click on the shape.
var time = end - start;

// Generate a random colour. This is used to generate the background colour of the shape.
function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// This function is used to generate the shape. By using the randomColor function, the background colour of the shape is generated. The size and shape of the shape displayed are randomised.
function makeShapeAppear() {
  var top = Math.random() * 300;
  var left = Math.random() * 300;
  var size = Math.random() * 300;

  if (Math.random() > 0.5) {
    document.getElementById("shape").style.borderRadius = "50%";
  } else {
    document.getElementById("shape").style.borderRadius = "0";
  }

  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.width = size + "px";
  document.getElementById("shape").style.height = size + "px";
  document.getElementById("shape").style.backgroundColor = randomColor();
  document.getElementById("shape").style.display = "block";
  start = new Date().getTime();
}

// This function randomises the amount of time that passes between each shape appearing.
function shapeAppear() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}

shapeAppear();

// Once a shape is clicked, this updates the html code to display the time it took to click on the shape.
document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  end = new Date().getTime();
  time = (end - start) / 1000;
  document.getElementById("time").innerHTML = time + "s";

  shapeAppear();
};
