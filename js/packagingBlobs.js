var container3= d3.select('#packagingBlob')
	.attr('class', 'layer')
	.attr('width', window.innerWidth/2)
	.attr('height', window.innerHeight);



var packagingBlobPoints = [];

var angleScale = d3.scaleLinear()
	.domain([0,90])
	.range([0, 2*Math.PI]);


for (var i=0; i<90; i++) {
		var packagingBlobPoint = [];
		var a = angleScale(i);
		var r = 140 + (100*Math.sin(i));
		packagingBlobPoint.push(a, r);
	
	
	packagingBlobPoints.push(packagingBlobPoint);

};



function updatePackagingBlobData() {
			var t = new Date().getTime();

	for (var i=0; i<packagingBlobPoints.length; i++){
		packagingBlobPoints[i][1] = (70*packagingamplitude)*Math.sin((t/((packagingmutateRate*30000)+1))/(( Math.abs( (Math.abs(i-45)-90) ) )/2000))+200;
	}

}


var packagingBlob = d3.radialLine()
	.curve(d3.curveBasisClosed)









