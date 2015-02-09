var canvas = document.getElementById('hline');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(0, 5);
context.lineTo(1000, 5);
context.linewidth = 2;
context.strokeStyle = '#ffffff';
context.stroke();