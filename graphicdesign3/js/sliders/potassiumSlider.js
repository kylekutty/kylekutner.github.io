var nutritionarcrotationrate = 0;


var potassiumSlider = d3.select("#potassiumSlider"),
    margin = {right: 50, left: 50},
    width = +potassiumSlider.attr("width") - margin.left - margin.right,
    height = +potassiumSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);



var slider12 = potassiumSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider12.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider12.interrupt(); })
        .on("start drag", function() { hue12(x.invert(d3.event.x)); }));



slider12.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("0");



slider12.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 200)
    .attr("text-anchor", "middle")
    .text("15");



slider12.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 400)
    .attr("text-anchor", "end")
    .text("30+");
  

var handle12 = slider12.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question12 = slider12.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("How many grams of fiber are in a serving?");



slider12.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue12", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue12(i(t)); };
    });



function hue12(h) {
  handle12.attr("cx", x(h));

  nutritionarcrotationrate = z(h);

  return nutritionarcrotationrate;

}















