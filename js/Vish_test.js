// var w = window.innerWidth;
// var h = window.innerHeight;

var w = window.innerHeight/2;
var h = window.innerHeight;


var character = 100;
var healthWords = 0;
var nutritionalInfoOnPackage = 0;
var color = 1;
var type = 1;
var physicalActivity = 0;
var recognizability = 1;
var complexity = 1;

var circles = d3.select('#our-drawing');



var data = (function (){
	var arr = [];
	for (var i=0; i<5; i++) {
		arr.push(character);
	}
	return arr;
})();

var scaleX = d3.scaleLinear()
  .domain([0, Math.max(data)])
  .range([0, Math.max(data)]);

circles.attr('width', w)
  .attr('height', h);

var blob = circles.append("g");

var blobs = blob.selectAll('blob')
  .data(data)
.enter().append('ellipse')
	.attr('class', 'blob')
	.attr('cx', function (d) { return d})
	.attr('cy', function (d) { return d})
	.attr('rx', function (d) { return d})
	.attr('ry', function (d) { return d})
	.attr('fill', '#000');




var rate = .7;
var size = .2;
var sizerate = .1;


function updateDrawing() {
	var t = new Date().getTime();
	var r = Math.sin(t/400);


	blobs.filter(function (d, i) { return i === 0 })
		.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*rate))*100) })
		.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*rate))*100) })
		.attr('rx', function (d, i) { return (size*((w/6)-(Math.sin(t/(700*sizerate))*90))) })
		.attr('ry', function (d, i) { return (size*((h/5)-(Math.sin(t/(900*sizerate))*90))) })

	blobs.filter(function (d, i) { return i === 1 })
		.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*rate))*100) })
		.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*rate))*100) })
		.attr('rx', function (d, i) { return (size*((w/8)-(Math.sin(t/(200*sizerate))*90))) })
		.attr('ry', function (d, i) { return (size*((h/4)-(Math.sin(t/(300*sizerate))*90))) })

	blobs.filter(function (d, i) { return i === 2 })
		.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*rate))*100) })
		.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*rate))*100) })
		.attr('rx', function (d, i) { return (size*((w/7.5)-(Math.sin(t/(300*sizerate))*90))) })
		.attr('ry', function (d, i) { return (size*((h/5)-(Math.sin(t/(2000*sizerate))*90))) })

	blobs.filter(function (d, i) { return i === 3 })
		.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*rate))*100) })
		.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*rate))*100) })
		.attr('rx', function (d, i) { return (size*((w/4)-(Math.sin(t/(800*sizerate))*90))) })
		.attr('ry', function (d, i) { return (size*((h/8)-(Math.sin(t/(150*sizerate))*90))) })

	blobs.filter(function (d, i) { return i === 4 })
		.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*rate))*100) })
		.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*rate))*100) })
		.attr('rx', function (d, i) { return (size*((w/4)-(Math.sin(t/(400*sizerate))*90))) })
		.attr('ry', function (d, i) { return (size*((h/7)-(Math.sin(t/(600*sizerate))*90))) })






}




function setup() {
  // enter
}

function draw() {
  // update
}
