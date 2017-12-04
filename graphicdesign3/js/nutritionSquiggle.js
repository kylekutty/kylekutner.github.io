var container2= d3.select('#nutritionline')
	.attr('width', window.innerWidth/2)
	.attr('height', window.innerHeight);

var angleScale = d3.scaleLinear()
	.domain([0,90])
	.range([0, 2*Math.PI]);




var rotationScale = d3.scaleLinear()
	.domain([0,1])
	.range([0,10]);

var amplitudeScale = d3.scaleLinear()
	.domain([0,1])
	.range([0,70]);

var mutateScale = d3.scaleLinear()
	.domain([0,1])
	.range([30000,0]);

var nutritionPoints = [];

var nutritionBlobPoints = [];

var nutritionArcPoints = [];


for (var i=0; i<90; i++) {
		var nutritionPoint = [];
		var a = angleScale(i);
		var r = 140 + (100*Math.sin(i));
		nutritionPoint.push(a, r);
	
	
	nutritionPoints.push(nutritionPoint);

};

for (var i=0; i<15; i++) {
		var nutritionBlobPoint = [];
		var a = angleScale2(i);
		var r = 140 + (100*Math.sin(i));
		nutritionBlobPoint.push(a, r);
	
	
	nutritionBlobPoints.push(nutritionBlobPoint);

};

for (var i=0; i<30; i++) {
		var nutritionArcPoint = [];
		var a = angleScale(i);
		var r = 10 + (100*Math.sin(i));
		nutritionArcPoint.push(a, r);
	
	
	nutritionArcPoints.push(nutritionArcPoint);

};



function updateNutritionData() {
			var t = new Date().getTime();

	for (var i=0; i<nutritionPoints.length; i++){
		nutritionPoints[i][1] = (70*nutritionamplitude)*Math.sin((t/((nutritionmutateRate*30000)+1))/((Math.abs(Math.abs(i-45)-90))/2000))+200;
	}

}

function updateNutritionBlobData() {
			var t = new Date().getTime();

	for (var i=0; i<nutritionBlobPoints.length; i++){
		nutritionBlobPoints[i][1] = (12*nutritionamplitude)*Math.sin((t/((nutritionmutateRate*30000)+1))/((Math.abs(Math.abs(i-45)-90))/2000))+50;
	}

}

function updateNutritionArcData() {
			var t = new Date().getTime();

	for (var i=0; i<nutritionArcPoints.length; i++){
		nutritionArcPoints[i][1] = (20*nutritionamplitude)*Math.sin((t/((nutritionmutateRate*30000)+1))/(( Math.abs( (Math.abs(i-15))-30 ) )/2000))+120;
	}

}


var nutritionline = d3.radialLine()
	.curve(d3.curveBasisClosed)

var nutritionpath = d3.radialLine()
	.curve(d3.curveBasis)





// var nutritionscaledmutateRate = mutateScale(nutritionmutateRate);
// var nutritionscaledamplitude = amplitudeScale(nutritionamplitude);
// var nutritionscaledrotationRate = rotationScale(nutritionrotationRate);





