// var w = window.innerWidth;
// var h = window.innerHeight;

var neww = window.innerHeight;
var newh = window.innerHeight;


var character = 100;
var healthWords = 0;
var nutritionalInfoOnPackage = 0;
var color = 1;
var type = 1;
var physicalActivity = 0;
var recognizability = 1;
var complexity = 1;

var nutritionCircles = d3.select('#nutritionBlobs');




nutritionCircles.attr('width', neww)
  .attr('height', newh);

var nutritionBlob = nutritionCircles.append("g");

var nutritionBlobs = nutritionBlob.selectAll('blob')
  .data(data)
.enter().append('ellipse')
	.attr('class', 'nblob')
	.attr('cx', 10)
	.attr('cy', 10)
	.attr('rx', 10)
	.attr('ry', 10)
	.attr('fill', '#000');




var nutritionRate = .5;
var nutritionSize ;
var nutritionSizerate = .9;


function updatenutritionBlobs() {
	var t = new Date().getTime();



	// nutritionBlobs.filter(function (d, i) { return i === 0 })
	// 	.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('rx', function (d, i) { return Math.abs((nutritionSize*((w/6)-(Math.sin(t/(700*(nutritionSizerate+.001)))*40)))) })
	// 	.attr('ry', function (d, i) { return Math.abs((nutritionSize*((h/5)-(Math.sin(t/(900*(nutritionSizerate+.001)))*40)))) })

	// nutritionBlobs.filter(function (d, i) { return i === 1 })
	// 	.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('rx', function (d, i) { return Math.abs((nutritionSize*((w/8)-(Math.sin(t/(200*(nutritionSizerate+.001)))*40)))) })
	// 	.attr('ry', function (d, i) { return Math.abs((nutritionSize*((h/4)-(Math.sin(t/(300*(nutritionSizerate+.001)))*40)))) })

	// nutritionBlobs.filter(function (d, i) { return i === 2 })
	// 	.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('rx', function (d, i) { return Math.abs((nutritionSize*((w/7.5)-(Math.sin(t/(300*(nutritionSizerate+.001)))*40)))) })
	// 	.attr('ry', function (d, i) { return Math.abs((nutritionSize*((h/5)-(Math.sin(t/(2000*(nutritionSizerate+.001)))*40)))) })

	// nutritionBlobs.filter(function (d, i) { return i === 3 })
	// 	.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('rx', function (d, i) { return Math.abs((nutritionSize*((w/4)-(Math.sin(t/(800*(nutritionSizerate+.001)))*40)))) })
	// 	.attr('ry', function (d, i) { return Math.abs((nutritionSize*((h/8)-(Math.sin(t/(150*(nutritionSizerate+.001)))*40)))) })

	// nutritionBlobs.filter(function (d, i) { return i === 4 })
	// 	.attr('cx', function (d, i) { return (w/2)+(Math.cos(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('cy', function (d, i) { return (h/2)+(Math.sin(t/(500*(nutritionRate+.001)))*40) })
	// 	.attr('rx', function (d, i) { return Math.abs((nutritionSize*((w/4)-(Math.sin(t/(400*(nutritionSizerate+.001)))*40)))) })
	// 	.attr('ry', function (d, i) { return Math.abs((nutritionSize*((h/7)-(Math.sin(t/(600*(nutritionSizerate+.001)))*40)))) })






}






function setup() {
  // enter
}

function draw() {
  // update
}
