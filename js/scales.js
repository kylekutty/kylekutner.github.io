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