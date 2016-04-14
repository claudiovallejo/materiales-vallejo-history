document.addEventListener('DOMContentLoaded', startTimer);

function startTimer() {
  setInterval(displayTime, 1000);
  displayTime();

}

function displayTime() {

  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  var canvas = document.querySelector("#clock-hands");
  var context = canvas.getContext("2d");

  var clockRadius = canvas.width / 2;
  var clockX = canvas.width / 2;
  var clockY = canvas.height / 2;

  Math.TAU = 2 * Math.PI;

  function drawArm(progress, armThickness, armLength, armColor) {
    var armRadians = (Math.TAU * progress) - (Math.TAU/4);
    var targetX = clockX + Math.cos(armRadians) * (armLength * clockRadius);
    var targetY = clockY + Math.sin(armRadians) * (armLength * clockRadius);

    context.lineWidth = armThickness;
    context.strokeStyle = armColor;

    context.beginPath();
    context.moveTo(clockX, clockY);
    context.lineTo(targetX, targetY);
    context.stroke();

  }

  context.clearRect(0, 0, canvas.width, canvas.height);

  drawArm(h/12, 1, 0.50, '#b3b3b3');
  drawArm(m/60, 1, 0.75, '#b3b3b3');

  // Create a circle at the center of the clock
  context.beginPath();
  context.arc(clockX, clockY, 1, 0, Math.PI*2);
  context.fillStyle = '#b3b3b3';
  context.fill();

}
