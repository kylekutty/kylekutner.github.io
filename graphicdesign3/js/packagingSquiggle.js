var container1= d3.select('#packagingline')
	.attr('width', window.innerWidth/2)
	.attr('height', window.innerHeight);


var angleScale = d3.scaleLinear()
	.domain([0,90])
	.range([0, 2*Math.PI]);

var angleScale2 = d3.scaleLinear()
	.domain([0,15])
	.range([0, 2*Math.PI]);

var angleScale3 = d3.scaleLinear()
	.domain([0,150])
	.range([0, 2*Math.PI]);

var color = d3.scaleLinear()
		.domain([0,1])
    .interpolate(d3.interpolateHcl)
    .range([d3.rgb("#000"), d3.rgb('#FFF')]);


var rotationScale = d3.scaleLinear()
	.domain([0,1])
	.range([0,10]);

var amplitudeScale = d3.scaleLinear()
	.domain([0,1])
	.range([0,70]);

var mutateScale = d3.scaleLinear()
	.domain([0,1])
	.range([30000,0]);

var packagingPoints = [];

var packagingBlobPoints = [];

var packagingArcPoints = [];


for (var i=0; i<90; i++) {
		var packagingPoint = [];
		var a = angleScale(i);
		var r = 140 + (100*Math.sin(i));
		packagingPoint.push(a, r);
	
	
	packagingPoints.push(packagingPoint);

};


for (var i=0; i<15; i++) {
		var packagingBlobPoint = [];
		var a = angleScale2(i);
		var r = 140 + (100*Math.sin(i));
		packagingBlobPoint.push(a, r);
	
	
	packagingBlobPoints.push(packagingBlobPoint);

};

for (var i=0; i<30; i++) {
		var packagingArcPoint = [];
		var a = angleScale(i);
		var r = 10 + (100*Math.sin(i));
		packagingArcPoint.push(a, r);
	
	
	packagingArcPoints.push(packagingArcPoint);

};


function updatePackagingData() {
			var t = new Date().getTime();

	for (var i=0; i<packagingPoints.length; i++){
		packagingPoints[i][1] = (70*packagingamplitude)*Math.sin((t/((packagingmutateRate*30000)+1))/(( Math.abs( (Math.abs(i-45)-90) ) )/2000))+200;
	}

}

function updatePackagingBlobData() {
			var t = new Date().getTime();

	for (var i=0; i<packagingBlobPoints.length; i++){
		packagingBlobPoints[i][1] = (12*packagingamplitude)*Math.sin((t/((packagingmutateRate*30000)+1))/(( Math.abs( (Math.abs(i-45)-90) ) )/2000))+50;
	}

}

function updatePackagingArcData() {
			var t = new Date().getTime();

	for (var i=0; i<packagingArcPoints.length; i++){
		packagingArcPoints[i][1] = (20*packagingamplitude)*Math.sin((t/((packagingmutateRate*30000)+1))/(( Math.abs( (Math.abs(i-15))-30 ) )/2000))+120;
	}

}




var packagingline = d3.radialLine()
	.curve(d3.curveBasisClosed)

var packagingpath = d3.radialLine()
	.curve(d3.curveBasis)








// var packagingscaledmutateRate = mutateScale(packagingmutateRate);
// var packagingscaledamplitude = amplitudeScale(packagingamplitude);
// var packagingscaledrotationRate = rotationScale(packagingrotationRate);





















