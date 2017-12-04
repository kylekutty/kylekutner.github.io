var packagingrotation=0;
var nutritionrotation=0;



function packagingdraw() {

var packagingSquiggle = container1.selectAll('.line')
	.data([packagingPoints])


packagingSquiggle.enter()
	.append('path')
		.attr('class','line')

packagingSquiggle.attr('d', packagingline)
		.attr('fill','none')
		.attr('stroke', '#000')
		.attr('transform', `translate(${window.innerWidth / 4},${window.innerHeight / 2}), rotate(${packagingrotation})`);


}


function packagingBlobdraw() {

	updatePackagingBlobPositionWidth();

		updatePackagingBlobPositionHeight();

var packagingBlob = container1.selectAll('.blob')
	.data([packagingBlobPoints])


packagingBlob.enter()
	.append('path')
		.attr('class','blob')

packagingBlob.attr('d', packagingline)
		.attr('fill',`${color(colorChanger1)}`)
		.attr('stroke', '#000')
		.attr('transform', `translate(${(window.innerWidth / 4)+packagingBlobRotationWidth},${(window.innerHeight / 2)+packagingBlobRotationHeight}), rotate(${-packagingrotation})`);


}

function packagingArcdraw() {

var packagingArc = container1.selectAll('.arc')
	.data([packagingArcPoints])


packagingArc.enter()
	.append('path')
		.attr('class','arc')

packagingArc.attr('d', packagingpath)
		.attr('fill','none')
		.attr('stroke', '#000')
		.attr('transform', `translate(${window.innerWidth / 4},${window.innerHeight / 2}), rotate(${(-packagingrotation)*(15*packagingarcrotationrate)})`);


}


function nutritiondraw() {

var nutritionSquiggle = container2.selectAll('.line')
	.data([nutritionPoints])

nutritionSquiggle.enter()
	.append('path')
		.attr('class','line')

nutritionSquiggle.attr('d', nutritionline)
		.attr('fill','none')
		.attr('stroke', '#000')
		.attr('transform', `translate(${window.innerWidth / 4},${window.innerHeight / 2}), rotate(${nutritionrotation})`);

}

function nutritionBlobdraw() {

		updateNutritionBlobPositionWidth();

		updateNutritionBlobPositionHeight();



var nutritionBlob = container2.selectAll('.blob')
	.data([nutritionBlobPoints])


nutritionBlob.enter()
	.append('path')
		.attr('class','blob')

nutritionBlob.attr('d', nutritionline)
		.attr('fill',`${color(colorChanger2)}`)
		.attr('stroke', '#000')
		.attr('transform', `translate(${(window.innerWidth / 4)+nutritionBlobRotationWidth},${(window.innerHeight / 2)+nutritionBlobRotationHeight}), rotate(${-nutritionrotation})`);



}

function nutritionArcdraw() {

var nutritionArc = container2.selectAll('.arc')
	.data([nutritionArcPoints])


nutritionArc.enter()
	.append('path')
		.attr('class','arc')

nutritionArc.attr('d', nutritionpath)
		.attr('fill','none')
		.attr('stroke', '#000')
		.attr('transform', `translate(${window.innerWidth / 4},${window.innerHeight / 2}), rotate(${(-nutritionrotation)*(15*nutritionarcrotationrate)})`);


}


function loop() {

	packagingrotation+=packagingrotationRate;

	nutritionrotation+=nutritionrotationRate;
	

	updatePackagingData();
  packagingdraw();

 	updateNutritionData();
  nutritiondraw();




	updatePackagingBlobData();
	packagingBlobdraw();

	updateNutritionBlobData();
	nutritionBlobdraw();




	updatePackagingArcData();
	packagingArcdraw();

	updateNutritionArcData();
	nutritionArcdraw();





  window.requestAnimationFrame(loop)
}

loop();