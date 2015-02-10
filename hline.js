var w = window.innerWidth;
var canvas = document.getElementById('hline');
canvas.width = w-(w*.1);
var context = canvas.getContext('2d');

function drawhline( canvas, context  )
{
	context.beginPath();
	context.moveTo(0, 5);
	context.lineTo(canvas.width, 5);
	context.linewidth = 2;
	context.strokeStyle = '#ffffff';
	context.stroke();
}

drawhline( canvas, context );
