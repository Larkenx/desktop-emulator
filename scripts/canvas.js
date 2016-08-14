var buttonRadius = 6;

function resizeCanvas() {
    var canvas = document.getElementById('canvas');
    // Set Canvas Width & Height to the Terminal Bar
    var twb = document.getElementById('terminal_window_bar');
    canvas.setAttribute("width", twb.clientWidth.toString());
    canvas.setAttribute("height", twb.clientHeight.toString());
}

// Canvas for OSX-like window buttons
function drawOSXButtons() {
  var canvas = document.getElementById('canvas');
  // resizeCanvas();
  var height = canvas.height;
  var c = canvas.getContext('2d');
  c.fillStyle = "#FB4747"; c.beginPath(); c.arc(20, height / 2, buttonRadius, 0, 2*Math.PI); c.closePath(); c.fill(); // Red
  c.fillStyle = "#FDB325"; c.beginPath(); c.arc(40, height / 2, buttonRadius, 0, 2*Math.PI); c.closePath(); c.fill(); // Yellow
  c.fillStyle = "#2AC533"; c.beginPath(); c.arc(60, height / 2, buttonRadius, 0, 2*Math.PI); c.closePath(); c.fill(); // Green
}

// Register mouse events for OSX buttons
function getMousePos(canvas, e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function getDistance(mousePos, otherPos) {
  return Math.sqrt(Math.pow((mousePos.x - otherPos.x), 2) + Math.pow((mousePos.y - otherPos.y), 2));
}
