
var nutritionBlobRotationWidth=1;

var nutritionBlobRotationHeight=1;




var nutritionrate = 1;

var nutritionrevolution = 1;


function updateNutritionBlobPositionWidth(){
    var t = new Date().getTime();

    nutritionBlobRotationWidth = (Math.sin(t/(500*(nutritionrate+.001)))*(40*nutritionrevolution));

    return nutritionBlobRotationWidth;


}

function updateNutritionBlobPositionHeight(){
    var t = new Date().getTime();

    nutritionBlobRotationHeight = (Math.cos(t/(500*(nutritionrate+.001)))*(40*nutritionrevolution));

    return nutritionBlobRotationHeight;


}


var sugarPrevalenceSlider = d3.select("#sugarPrevalenceSlider"),
    margin = {right: 50, left: 50},
    width = + sugarPrevalenceSlider.attr("width") - margin.left - margin.right,
    height = + sugarPrevalenceSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);



var slider4 = sugarPrevalenceSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider4.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider4.interrupt(); })
        .on("start drag", function() { hue4(x.invert(d3.event.x)); }));

slider4.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("1st");

slider4.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(100," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "middle")
    .text("2nd");

slider4.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(200," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "middle")
    .text("3rd");

slider4.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(300," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "middle")
    .text("4th");


slider4.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(400," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "end")
    .text("5th or later");

var handle4 = slider4.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question4 = slider4.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("When is refined sugar listed in the ingredients list?");



slider4.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue4", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue4(i(t)); };
    });



function hue4(h) {
  handle4.attr("cx", x(h));

  nutritionrate = y(h);

  return nutritionrate;

}















